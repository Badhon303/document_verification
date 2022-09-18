// import { useState } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { logout } from "../actions/userActions"
import { useSelector, useDispatch } from "react-redux"
// import jwt_decode from "jwt-decode"

export const ProtectedRoute = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  //   var date = new Date("2022-09-24T10:42:48.343Z")
  //   var milliseconds = date.getTime();
  // console.log("milliseconds: ", milliseconds);
  // const decodedToken = userInfo && jwt_decode(userInfo.token)
  // const dispatch = useDispatch()

  // if (userInfo && userInfo.token) {
  //   if (userLogin.exp * 1000 < new Date().getTime()) dispatch(logout())
  // }

  return userInfo ? <Outlet /> : <Navigate to='/' />
}

export const PublicRoute = () => {
  return <Outlet />
}

// export const AdminProtectedRoute = () => {
//   const userLogin = useSelector((state) => state.userLogin)
//   const { userInfo } = userLogin
//   const decodedToken = userInfo && jwt_decode(userInfo.id_token)
//   const role = decodedToken && decodedToken.sub
//   // const role = "admin"
//   const dispatch = useDispatch()

//   if (userInfo && userInfo.id_token) {
//     if (decodedToken.exp * 1000 < new Date().getTime()) dispatch(logout())
//   }

//   return userInfo && role === "admin" ? (
//     <Outlet context={role} />
//   ) : (
//     <Navigate to='/qrcode' />
//   )
// }

// export default ProtectedRoute
