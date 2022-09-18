import QRCode from "qrcode.react"
// import Certificate from "./Certificate"

const Test = () => {
  return (
    <QRCode
      //   id='qr-gen'
      value={"https://www.google.com"}
      size={90}
      level={"H"}
      //   includeMargin={true}
    />
  )
}

export default Test
