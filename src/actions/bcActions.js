import axios from "axios"
import { BASE_URL } from "../utils/urls"

export const publishAction = (obj) => async (dispatch) => {
  try {
    dispatch({
      type: "PUBLISH_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmQ1MmVlZTY5NjQ3Y2U5ZjRlN2NjYWMiLCJpYXQiOjE2NTgxMzgzNzAsImV4cCI6MTk2OTE3ODM3MCwidHlwZSI6ImFjY2VzcyJ9.jvBzNJhAduRs29q37VZ_nHKxhPnjg8FqwFaDeXcyd2U",
      },
    }
    const { data } = await axios.post(`${BASE_URL}/ecert/publish`, obj, config)
    dispatch({
      type: "PUBLISH_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "PUBLISH_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

export const verifyAction = (Id) => async (dispatch) => {
  try {
    dispatch({
      type: "VERIFY_REQUEST",
    })
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    const { data } = await axios.get(`${BASE_URL}/ecert/verify/${Id}`, config)
    dispatch({
      type: "VERIFY_SUCCESS",
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: "VERIFY_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}
