import axios from "axios"
import { BASE_URL } from "../utils/urls"

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      `${BASE_URL}/auth/register`,
      { name, email, password },
      config
    )
    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: data,
    })
    // dispatch({
    //   type: "USER_LOGIN_SUCCESS",
    //   payload: data,
    // })
    // localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.post(
      `${BASE_URL}/auth/login`,
      { email, password },
      config
    )
    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: data,
    })
    localStorage.setItem("userInfo", JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo")
  dispatch({ type: "USER_LOGOUT" })
}

export const getUsersAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: "GET_USERS_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()
    console.log("userInfo: ", userInfo)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.tokens.access.token}`,
      },
    }
    const { data } = await axios.get(`${BASE_URL}/users`, config)
    dispatch({
      type: "GET_USERS_SUCCESS",
      payload: data,
    })
    console.log("data: ", data)
  } catch (error) {
    dispatch({
      type: "GET_USERS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const deleteUserAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: "USER_DELETE_REQUEST",
    })
    const {
      userLogin: { userInfo },
    } = getState()
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.tokens.access.token}`,
      },
    }
    await axios.delete(`${BASE_URL}/users/${id}`, config)
    dispatch({
      type: "USER_DELETE_SUCCESS",
    })
  } catch (error) {
    dispatch({
      type: "USER_DELETE_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
