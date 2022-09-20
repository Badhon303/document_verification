export const BASE_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://115.127.24.185:3000/v1"
    : "http://localhost:3000/v1"

export const QR_URL =
  process.env.REACT_APP_ENV === "dev"
    ? "http://44.202.8.142:3000"
    : "http://localhost:3000"
