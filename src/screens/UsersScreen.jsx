import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import {
  register,
  getUsersAction,
  deleteUserAction,
} from "../actions/userActions"
import Swal from "sweetalert2"

const UsersScreen = () => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const userRegister = useSelector((state) => state.userRegister)
  const { error, loading, success } = userRegister
  const getUsers = useSelector((state) => state.getUsers)
  const { error: tableError, loading: tableLoading, tableData } = getUsers
  const userDelete = useSelector((state) => state.userDelete)
  const {
    error: deleteError,
    loading: deleteLoading,
    success: deleteSuccess,
  } = userDelete
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {
    if (!userInfo) {
      navigate("/")
    }
  })
  console.log("tableData: ", tableData)
  useEffect(() => {
    success &&
      Swal.fire(
        "Created!",
        "Upazilla has been created successfully.",
        "success"
      )
    dispatch({ type: "USER_REGISTER_RESET" })
  }, [success])

  useEffect(() => {
    dispatch(getUsersAction())
  }, [dispatch, success, deleteSuccess])

  useEffect(() => {
    error &&
      Swal.fire({
        imageUrl: "/assets/images/Error.png",
        text: `${error}`,
        showCloseButton: true,
      })
    dispatch({ type: "USER_REGISTER_RESET" })
  }, [error])

  useEffect(() => {
    deleteSuccess && Swal.fire("Deleted!", "User has been deleted.", "success")
    dispatch({ type: "USER_DELETE_RESET" })
  }, [deleteSuccess])

  const createUpazilla = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password))
  }

  const handleDelete = (id) => {
    dispatch(deleteUserAction(id))
  }

  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <div className='row'>
              <div className='col-8'>
                <h2>Upazilla</h2>
              </div>
            </div>

            <div className='row p-4'>
              <div className='col-sm-12 col-md-6'>
                <div className='row g-3 align-items-center'>
                  <div className='col-auto'>
                    <label htmlFor='inputSearch' className='col-form-label'>
                      Search
                    </label>
                  </div>
                  <div className='col-auto'>
                    <input
                      type='text'
                      id='inputSearch'
                      className='form-control'
                      aria-describedby='searchHelpInline'
                    />
                  </div>
                </div>
              </div>
              <div className='col-sm-12 col-md-6 text-end'>
                <button
                  className='btn btn-primary'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModalCenter3'
                >
                  Create new upazilla
                </button>
              </div>
            </div>
            <div className='row'>
              <div className='table-responsive'>
                <table className='table invoice-table'>
                  <thead>
                    <tr>
                      <th scope='col'>ID</th>
                      <th scope='col'>User Name</th>
                      <th scope='col'>Email</th>
                      <th scope='col'>Status</th>
                      <th scope='col'>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData &&
                      tableData.results &&
                      tableData.results.map((data) => (
                        <tr key={data.id}>
                          <th scope='row'>{data.id}</th>
                          <td>
                            <img src='./assets/images/avatar.png' alt='' />
                            {data.name}
                          </td>
                          <td>{data.email}</td>
                          <td>
                            <span className='badge bg-success'>Approved</span>
                          </td>
                          <td>
                            <Link
                              to='#'
                              data-bs-toggle='modal'
                              data-bs-target='#exampleModalCenter'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-edit'
                              >
                                <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                                <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                              </svg>
                            </Link>
                            <Link
                              to='#'
                              data-bs-toggle='modal'
                              data-bs-target='#exampleModalCenter1'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-eye'
                              >
                                <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                                <circle cx='12' cy='12' r='3'></circle>
                              </svg>
                            </Link>
                            <Link
                              to=''
                              onClick={() =>
                                Swal.fire({
                                  imageUrl: "/assets/images/Error.png",
                                  text: "Are you sure you want to delete?",
                                  confirmButtonText: "Confirm",
                                  showCancelButton: true,
                                }).then((result) => {
                                  if (result.isConfirmed) {
                                    handleDelete(data.id)
                                  }
                                })
                              }
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                strokeWidth='2'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                className='feather feather-trash-2'
                              >
                                <polyline points='3 6 5 6 21 6'></polyline>
                                <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
                                <line x1='10' y1='11' x2='10' y2='17'></line>
                                <line x1='14' y1='11' x2='14' y2='17'></line>
                              </svg>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label='Page navigation example'>
              <ul className='pagination justify-content-center'>
                <li className='page-item'>
                  <Link className='page-link' to='#'>
                    Previous
                  </Link>
                </li>
                <li className='page-item'>
                  <Link className='page-link' to='#'>
                    1
                  </Link>
                </li>
                <li className='page-item'>
                  <Link className='page-link' to='#'>
                    2
                  </Link>
                </li>
                <li className='page-item'>
                  <Link className='page-link' to='#'>
                    3
                  </Link>
                </li>
                <li className='page-item'>
                  <Link className='page-link' to='#'>
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className='modal fade'
              id='exampleModalCenter'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              style={{ display: "none" }}
              aria-hidden='true'
            >
              <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalCenterTitle'>
                      Update User
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <div className='card'>
                        <div className='card-body'>
                          {/* <h5 className='card-title'>Edit</h5> */}
                          <form>
                            <div className='row mb-3'>
                              <label
                                htmlFor='inputName3'
                                className='col-sm-2 col-form-label'
                              >
                                Name
                              </label>
                              <div className='col-sm-10'>
                                <input
                                  type='email'
                                  className='form-control'
                                  id='inputName3'
                                />
                              </div>
                            </div>
                            <div className='row mb-3'>
                              <label
                                htmlFor='inputEmail3'
                                className='col-sm-2 col-form-label'
                              >
                                Email
                              </label>
                              <div className='col-sm-10'>
                                <input
                                  type='password'
                                  className='form-control'
                                  id='inputEmail3'
                                />
                              </div>
                            </div>
                            <div className='row mb-3'>
                              <label
                                htmlFor='inputPhone3'
                                className='col-sm-2 col-form-label'
                              >
                                Phone
                              </label>
                              <div className='col-sm-10'>
                                <input
                                  type='email'
                                  className='form-control'
                                  id='inputPhone3'
                                />
                              </div>
                            </div>
                            <fieldset className='row mb-3'>
                              <legend className='col-form-label col-sm-2 pt-0'>
                                Status
                              </legend>
                              <div className='col-sm-10'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='radio'
                                    name='gridRadios'
                                    id='gridRadios1'
                                    value='option1'
                                    // checked=''
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='gridRadios1'
                                  >
                                    Approved
                                  </label>
                                </div>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='radio'
                                    name='gridRadios'
                                    id='gridRadios2'
                                    value='option2'
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='gridRadios2'
                                  >
                                    Pending
                                  </label>
                                </div>
                                <div className='form-check disabled'>
                                  <input
                                    className='form-check-input'
                                    type='radio'
                                    name='gridRadios'
                                    id='gridRadios3'
                                    value='option3'
                                    disabled=''
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='gridRadios3'
                                  >
                                    Rejected
                                  </label>
                                </div>
                              </div>
                            </fieldset>
                            {/* <button type='submit' className='btn btn-primary'>
                                Save
                              </button> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                    <button type='button' className='btn btn-primary'>
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='modal fade'
              id='exampleModalCenter1'
              tabIndex='-1'
              aria-labelledby='exampleModalLabel'
              style={{ display: "none" }}
              aria-hidden='true'
            >
              <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalCenterTitle'>
                      View
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='modal fade'
              id='exampleModalCenter2'
              tabIndex='-1'
              aria-labelledby='exampleModalLabe2'
              style={{ display: "none" }}
              aria-hidden='true'
            >
              <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalCenterTitle'>
                      Delete
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='modal fade'
              id='exampleModalCenter3'
              tabIndex='-1'
              aria-labelledby='exampleModalLabe2'
              style={{ display: "none" }}
              aria-hidden='true'
            >
              <div className='modal-dialog modal-dialog-centered modal-lg'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h5 className='modal-title' id='exampleModalCenterTitle'>
                      Create new upazilla
                    </h5>
                    <button
                      type='button'
                      className='btn-close'
                      data-bs-dismiss='modal'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <div className='card'>
                        <div className='card-body'>
                          <div className='row g-3'>
                            <div className='col-sm-5'>
                              <input
                                type='email'
                                className='form-control'
                                placeholder='Email'
                                aria-label='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                            <div className='col-sm'>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Name'
                                aria-label='Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                              />
                            </div>
                            <div className='col-sm'>
                              <input
                                type='password'
                                className='form-control'
                                placeholder='Password'
                                aria-label='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer'>
                    <button
                      type='button'
                      className='btn btn-primary'
                      onClick={createUpazilla}
                      data-bs-dismiss='modal'
                    >
                      Create new upazilla
                    </button>
                    <button
                      type='button'
                      className='btn btn-secondary'
                      data-bs-dismiss='modal'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersScreen
