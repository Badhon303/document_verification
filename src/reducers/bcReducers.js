export const publishReducer = (state = {}, action) => {
  switch (action.type) {
    case "PUBLISH_REQUEST":
      return { loading: true }
    case "PUBLISH_SUCCESS":
      return { loading: false, publishData: action.payload }
    case "PUBLISH_FAIL":
      return { loading: false, error: action.payload }
    case "PUBLISH_RESET":
      return { publishData: null, error: null }
    default:
      return state
  }
}

export const verifyReducer = (state = {}, action) => {
  switch (action.type) {
    case "VERIFY_REQUEST":
      return { loading: true }
    case "VERIFY_SUCCESS":
      return {
        loading: false,
        verifyData: action.payload,
        status: action.payload.status,
      }
    case "VERIFY_FAIL":
      return { loading: false, error: action.payload }
    case "VERIFY_RESET":
      return {
        status: null,
        error: null,
      }
    default:
      return state
  }
}
