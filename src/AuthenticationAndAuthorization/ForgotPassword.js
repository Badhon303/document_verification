import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { useFormik } from "formik"
import { forgotPass } from "../../libs/apis"
import Swal from "sweetalert2"

const validate = (values) => {
  const errors = {}
  const { email } = values

  if (!email) {
    errors.email = "Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }

  return errors
}

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (data) => {
      setLoading(true)
      forgotPass(data)
        .then((res) => {
          setLoading(false)
          if (res.ok && res.data.success) {
            Swal.fire({
              title: "Success",
              text: res.data.message,
              confirmButtonColor: "#ff8c00",
              confirmButtonText: "Okay",
            })

            history.push("/")
          } else {
            Swal.fire({
              title: "Error",
              text: res.data.message,
              confirmButtonColor: "#ff8c00",
              confirmButtonText: "Back",
            })
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: err.message,
            confirmButtonColor: "#ff8c00",
            confirmButtonText: "Back",
          })
        })
    },
  })

  return (
    <div className='login-page'>
      {/* <div className="loader">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
      <div className='container'>
        <div className='row justify-content-md-center'>
          <div className='col-md-12 col-lg-4'>
            <div className='card login-box-container'>
              <div className='card-body'>
                <div className='authent-logo'>
                  <img
                    className='img-fluid'
                    src={"./assets/images/WES_logo_head.png"}
                    alt='WES_logo_head'
                    width='200px'
                    height='50px'
                  />
                </div>
                <div className='authent-text'>
                  <p>Type your email to reset password</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        name='email'
                        id='email'
                        aria-describedby='sign-in-email'
                        placeholder='Enter your email'
                        className='form-control'
                        autoComplete='off'
                      />
                      <label htmlFor='floatingInput'>Enter your email</label>
                    </div>
                    {formik.touched.email && formik.errors.email && (
                      <div className='form-validationB'>
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                  <div className='d-grid'>
                    {!loading ? (
                      <button type='submit' className='btn btn-info m-b-xs'>
                        Forgot Password
                      </button>
                    ) : (
                      <button
                        className='btn btn-info'
                        type='button'
                        disabled=''
                      >
                        <span
                          className='spinner-border spinner-border-sm'
                          role='status'
                          aria-hidden='true'
                        ></span>
                        &nbsp;&nbsp;&nbsp; Processing...
                      </button>
                    )}
                  </div>
                </form>
                <div className='authent-reg'>
                  <p className='pb-3'>
                    Have an Account? <NavLink to='/'>Sign In</NavLink>
                  </p>
                  <p>
                    Don't have an Account?{" "}
                    <NavLink to='/signup'>Register</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
