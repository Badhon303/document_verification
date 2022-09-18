import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../actions/userActions"

const SignUpScreen = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister
  // let loading = false

  useEffect(() => {
    if (userInfo) {
      navigate("/")
    }
  }, [navigate, userInfo])

  const submithandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      console.log("Passwords do not match")
    } else {
      dispatch(register(name, email, password))
    }
  }

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
                    src={"./assets/images/logo@2x.png"}
                    alt='WES_logo_head'
                    // width='200px'
                    // height='50px'
                  />
                </div>
                <div className='authent-text'>
                  <p>Enter your details to create your account</p>
                </div>

                <form onSubmit={submithandler}>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='name'
                        placeholder='Enter your name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='form-control'
                        // autoComplete='off'
                      />
                      <label htmlFor='floatingInput'>Enter your name</label>
                    </div>
                    {/* {formik.touched.nickName && formik.errors.nickName && (
                        {formik.errors.nickName}
                    )} */}
                    {/* <div className='form-validationB'></div> */}
                  </div>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='name'
                        placeholder='Enter email address'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                        // autoComplete='off'
                      />
                      <label htmlFor='floatingInput'>Enter your email</label>
                    </div>

                    {/* <div className='form-validationB'></div> */}
                  </div>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                        // autoComplete='off'
                      />
                      <label htmlFor='floatingPassword'>
                        Enter your password
                      </label>
                    </div>

                    <div className='form-validationB'></div>
                  </div>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='password'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='form-control'
                        // autoComplete='off'
                      />
                      <label htmlFor='floatingPassword'>Confirm password</label>
                    </div>

                    <div className='form-validationB'></div>
                  </div>
                  <div className='mb-3'>
                    <span className='float-right'>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                    </span>
                  </div>

                  <div className='d-grid'>
                    {!loading ? (
                      <button type='submit' className='btn btn-primary m-b-xs'>
                        Sign Up
                      </button>
                    ) : (
                      <button
                        className='btn btn-primary'
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
                <div className='authent-login'>
                  <p>
                    Already have an account? <Link to='/'>Sign in</Link>
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

export default SignUpScreen
