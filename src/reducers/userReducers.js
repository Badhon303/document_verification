export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true }
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload, success: true }
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload }
    case "USER_REGISTER_RESET":
      return { success: false, error: null }
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true }
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload }
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload }
    case "USER_LOGOUT":
      return {}
    default:
      return state
  }
}

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USERS_REQUEST":
      return { loading: true }
    case "GET_USERS_SUCCESS":
      return { loading: false, tableData: action.payload }
    case "GET_USERS_FAIL":
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DELETE_REQUEST":
      return { loading: true }
    case "USER_DELETE_SUCCESS":
      return { loading: false, success: true }
    case "USER_DELETE_FAIL":
      return { loading: false, error: action.payload }
    case "USER_DELETE_RESET":
      return { success: false, error: null }
    default:
      return state
  }
}
