export const BASE_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://115.127.24.185:3000/v1"
    : "http://localhost:3000/v1"

export const QR_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://35.173.200.233:3000"
    : "http://localhost:3000"
