import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import { verifyAction } from "../actions/bcActions"
import { useSelector, useDispatch } from "react-redux"

const Verify = () => {
  const { id } = useParams()
  const verify = useSelector((state) => state.verify)
  const { loading, verifyData, error, status } = verify
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(verifyAction(id))
  }, [id])
  const handleVerify = () => {
    dispatch(verifyAction(id))
    Swal.fire({
      title: "Certificate Data",
      html: `
      <p>নাম: ${
        verifyData &&
        verifyData.data &&
        verifyData.data.licenseData &&
        verifyData.data.licenseData.name
      }</p>
      <p>ন্যাশনাল আইডি নং:  ${
        verifyData &&
        verifyData.data &&
        verifyData.data.licenseData &&
        verifyData.data.licenseData.nid
      }</p>
    `,
      showCloseButton: true,
      confirmButtonText: "Verify",
    }).then((res) => {
      if (res.isConfirmed) {
        if (status === "success") {
          Swal.fire("Verified!", "Certificate verified.", "success")
          // !loading && dispatch({ type: "VERIFY_RESET" })
        } else if (error) {
          Swal.fire("Error!", "Certificate not verified.", "error")
          // !loading && dispatch({ type: "VERIFY_RESET" })
        }
      }
    })

    //
  }
  // useEffect(() => {
  //   status === "success" && Swal.fire("Verified")
  //   !loading && dispatch({ type: "VERIFY_RESET" })
  // }, [status])

  // useEffect(() => {
  //   error && Swal.fire("Error in Verification")
  //   !loading && dispatch({ type: "VERIFY_RESET" })
  // }, [error])

  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>
              eCertBD Certificate Verification System
            </h5>
            <p className='card-description'>
              This certificate was issued to{" "}
              {verifyData &&
                verifyData.data &&
                verifyData.data.licenseData &&
                verifyData.data.licenseData.name}{" "}
              nid no{" "}
              {verifyData &&
                verifyData.data &&
                verifyData.data.licenseData &&
                verifyData.data.licenseData.nid}
            </p>
            <div className='text-center'>
              {loading ? (
                <button
                  className='btn btn-primary m-t-xs'
                  type='button'
                  disabled=''
                >
                  <span
                    className='spinner-border spinner-border-sm'
                    role='status'
                    aria-hidden='true'
                  ></span>
                  &nbsp;&nbsp;&nbsp; Processing...
                </button>
              ) : (
                <button
                  type='button'
                  className='btn btn-primary m-t-xs'
                  onClick={handleVerify}
                >
                  Check
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Verify
