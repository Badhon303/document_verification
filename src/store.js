//npm i redux react-redux redux-thunk redux-devtools-extension

import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux"
// import { configureStore } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import {
  userRegisterReducer,
  userLoginReducer,
  getUsersReducer,
  userDeleteReducer,
} from "./reducers/userReducers"
import { publishReducer, verifyReducer } from "./reducers/bcReducers"

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  publish: publishReducer,
  verify: verifyReducer,
  getUsers: getUsersReducer,
  userDelete: userDeleteReducer,
})

const cuserInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null

const initialState = {
  userLogin: { userInfo: cuserInfoFromStorage },
}
const middleware = [thunk]
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
