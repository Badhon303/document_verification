import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"

const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate("/users")
    }
  }, [navigate, userInfo])
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
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
                  <p>Please Sign-in to your account.</p>
                </div>

                <form onSubmit={submitHandler}>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                        // autoComplete='off'
                      />
                      <label htmlFor='floatingInput'>Enter your email</label>
                    </div>
                  </div>
                  <div className='mb-3'>
                    <div className='form-floating'>
                      <input
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                      />
                      <label htmlFor='floatingPassword'>
                        Enter your password
                      </label>
                    </div>

                    {error && (
                      <div className='error-feedback'>
                        Incorrect username or password.
                      </div>
                    )}
                  </div>
                  <div className='mb-3'>
                    <span className='float-right'>
                      <Link to='/forgot-password'>Forgot Password?</Link>
                    </span>
                  </div>
                  <div className='d-grid'>
                    <button type='submit' className='btn btn-info m-b-xs'>
                      Sign In
                    </button>
                  </div>
                  {/* <div className='d-grid'>
                    {!loading ? (
                      <button type='submit' className='btn btn-info m-b-xs'>
                        Send OTP
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
                  </div> */}
                </form>

                {/* <div className='authent-reg'>
                  <p>
                    Not registered? <Link to='/signup'>Create an account</Link>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
