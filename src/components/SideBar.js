import { Link } from "react-router-dom"
import SubSidebar from "./SubSidebar"
import { useDispatch } from "react-redux"
import { logout } from "../actions/userActions"

let userCertificateMenu = [
  {
    name: "Upazilla Cerificates",
    path: "/certificates",
  },
  {
    name: "Verify Cerificates",
    path: "/verify-certificates",
  },
]

// let userTokenMenu = [
//   {
//     name: "Send",
//     path: "/send",
//   },
//   {
//     name: "Buy",
//     path: "/buy",
//   },
// ]
// const userReferralMenu = [
//   {
//     name: "Purchase ",
//     path: "/referral-purchase",
//   },
//   {
//     name: "RP Usage History ",
//     path: "/referral-purchase-history",
//   },
//   {
//     name: "RP Reward History ",
//     path: "/referral-reward-history",
//   },
//   {
//     name: "Members ",
//     path: "/members",
//   },
// ]

// const userGoldMenu = [
//   {
//     name: "Purchase ",
//     path: "/gp-purchase",
//   },
//   {
//     name: "History ",
//     path: "/gp-history",
//   },
// ]

const SideBar = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='page-sidebar ps ps--active-y'>
      <ul className='list-unstyled accordion-menu overflow-auto'>
        <li className='sidebar-title'>Main</li>
        <li className='active-page'>
          <Link to='/users'>
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
              className='feather feather-home'
            >
              <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
              <polyline points='9 22 9 12 15 12 15 22'></polyline>
            </svg>
            Dashboard
          </Link>
        </li>
        <li className='sidebar-title'>Details</li>
        {/* {user &&
          user.role === "user" &&
          // user &&
          (user.approvalStatus === "pending" ||
            user.approvalStatus === "unapplied") &&
          !user.firstName &&
          ((user.nidBack === "nid_back.jpg" &&
            user.nidFront === "nid_front.jpg") ||
            user.passportBiodata === "passport_biodata.jpg" ||
            (user.drivingBack === "driving_back.jpg" &&
              user.drivingFront === "driving_front.jpg")) && (
            <li className=''>
              <Link to='#'>
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
                  className='feather feather-check-square'
                >
                  <polyline points='9 11 12 14 22 4'></polyline>
                  <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'></path>
                </svg>
                ID Verification
              </Link>
            </li>
          )} */}
        <SubSidebar
          icon={
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
          }
          title={"Certificates"}
          submenu={userCertificateMenu}
        />

        <li>
          <Link to='/publish'>
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
              className='feather feather-edit'
            >
              <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
              <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
            </svg>
            Publish
          </Link>
        </li>

        {/* <li className='sidebar-title'>Tokens & Points</li> */}
        {/* <SubSidebar
          icon={
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
              className='feather feather-edit'
            >
              <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
              <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
            </svg>
          }
          title={"Tokens"}
          submenu={userTokenMenu}
        /> */}
        {/* <SubSidebar
          icon={
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
              className='feather feather-gift'
            >
              <polyline points='20 12 20 22 4 22 4 12'></polyline>
              <rect x='2' y='7' width='20' height='5'></rect>
              <line x1='12' y1='22' x2='12' y2='7'></line>
              <path d='M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z'></path>
              <path d='M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z'></path>
            </svg>
          }
          title={"referral Point"}
          submenu={userReferralMenu}
        /> */}
        {/* <SubSidebar
          icon={
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
              className='feather feather-star'
            >
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
          }
          title={"Gold Point"}
          submenu={userGoldMenu}
        /> */}
        <li className='sidebar-title'>Others</li>
        <li>
          <Link to='#'>
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
            Terms & Conditions
          </Link>
        </li>
        <li onClick={logoutHandler}>
          <Link to='/'>
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
        </li>
      </ul>
    </div>
  )
}

export default SideBar
