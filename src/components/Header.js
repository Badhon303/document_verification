import { Link } from "react-router-dom"
import { logout } from "../actions/userActions"
import { useDispatch } from "react-redux"
// import { removeLoggedInUser } from "../libs/AuthContainer"
// import { getLoggedInUser } from "../libs/AuthContainer"
// import { PHOTO_URL } from "../constants"

const Header = (props) => {
  const dispatch = useDispatch()
  // const user = getLoggedInUser()
  const logoutHandler = () => {
    dispatch(logout())
  }
  let picture = null
  // if (user.photo !== "no-photo.jpg") {
  //   picture = user.photo;
  // } else picture = null;
  // const handleLogOut = () => {
  //   removeLoggedInUser()
  //   history.push("/")
  // }

  return (
    <div className='page-header'>
      <nav className='navbar navbar-expand-lg d-flex justify-content-between'>
        <div className='' id='navbarNav'>
          <ul className='navbar-nav' id='leftNav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                id='sidebar-toggle'
                to='#'
                role='button'
                onClick={props.ToggleClass}
              >
                <i className='fas fa-angle-left'></i>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Settings
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>
                Help
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="logo">
          <Link className="navbar-brand" to="index.html"></Link>
        </div> */}
        <div>
          <div className='col-12 d-none d-md-block authent-logo'>
            <img
              className='img-fluid'
              src={"/assets/images/logo@2x.png"}
              alt='WES_logo_head'
              // width='200px'
              // height='50px'
            />
          </div>
          <div className='col-12 d-block d-md-none authent-logo'>
            <img
              className='img-fluid'
              src={"/assets/images/WES_logo.png"}
              alt='WES_logo_head'
              width='40px'
              height='40px'
            />
          </div>
        </div>
        <div className='' id='headerNav'>
          <ul className='navbar-nav'>
            <li className='nav-item dropdown'>
              <Link
                className='nav-link profile-dropdown'
                to='/user-dashboard'
                id='profileDropDown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <img
                  className='rounded-circle'
                  width='40px'
                  height='40px'
                  src={
                    // picture
                    //   ? `${PHOTO_URL}/${picture}`
                    //   : "./assets/images/avatar.png"
                    picture
                      ? "/assets/images/avatar.png"
                      : "/assets/images/avatar.png"
                  }
                  alt='profile'
                />
              </Link>
              <div
                className='dropdown-menu dropdown-menu-end profile-drop-menu'
                aria-labelledby='profileDropDown'
                data-bs-popper='none'
              >
                <Link className='dropdown-item' to='https://google.com'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-user'
                  >
                    <path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
                    <circle cx='12' cy='7' r='4'></circle>
                  </svg>
                  Profile
                </Link>
                <Link className='dropdown-item' to='https://google.com'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-inbox'
                  >
                    <polyline points='22 12 16 12 14 15 10 15 8 12 2 12'></polyline>
                    <path d='M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z'></path>
                  </svg>
                  Messages
                </Link>
                <Link className='dropdown-item' to='https://google.com'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-check-circle'
                  >
                    <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'></path>
                    <polyline points='22 4 12 14.01 9 11.01'></polyline>
                  </svg>
                  Tasks
                </Link>
                <div className='dropdown-divider'></div>
                <Link className='dropdown-item' to='https://google.com'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-settings'
                  >
                    <circle cx='12' cy='12' r='3'></circle>
                    <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
                  </svg>
                  Settings
                </Link>
                <Link className='dropdown-item' onClick={logoutHandler} to='/'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-log-out'
                  >
                    <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
                    <polyline points='16 17 21 12 16 7'></polyline>
                    <line x1='21' y1='12' x2='9' y2='12'></line>
                  </svg>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
