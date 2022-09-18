import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { resetPass, getQueryParams } from "../../libs/apis";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const validate = (values) => {
  const errors = {};
  const { password, passwordConfirm } = values;

  if (!password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{4,8}$/i.test(values.password)
  ) {
    errors.password =
      "Must be between 4 to 8 characters and at least 1 character and 1 numeric number";
  }

  if (!passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (passwordConfirm !== password) {
    errors.passwordConfirm = "Does not match with password";
  }

  return errors;
};

const ResetPassword = () => {
  let history = useHistory();
  let queries = getQueryParams();
  let tokenQuery = queries.find((query) => query[0] === "token");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    validate,
    onSubmit: (values) => {
      const token = tokenQuery[1];
      setLoading(true);
      resetPass({ password: values.password, token })
        .then((response) => {
          setLoading(false);
          if (response.ok) {
            Swal.fire({
              title: response.message,
              text: "Success",
              confirmButtonColor: "#ff8c00",
              confirmButtonText: "Okay",
            });
            history.push("/");
          } else {
            Swal.fire({
              title: response.err.statusText,
              text: response.data.message,
              confirmButtonColor: "#ff8c00",
              confirmButtonText: "Back",
            });
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: err.message,
            confirmButtonColor: "#ff8c00",
            confirmButtonText: "Back",
          });
        });
    },
  });

  return (
    <div className="login-page">
      {/* <div className="loader">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12 col-lg-4">
            <div className="card login-box-container">
              <div className="card-body">
                <div className="authent-logo">
                  <img
                    className="img-fluid"
                    src={"./assets/images/WES_logo_head.png"}
                    alt="WES_logo_head"
                    width="200px"
                    height="50px"
                  />
                </div>
                <div className="authent-text">
                  <p>Reset your passowrd</p>
                </div>

                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-3">
                    <div className="form-floating">
                      <input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className="form-control"
                        name="password"
                        id="password"
                        aria-describedby="sign-in-password"
                        placeholder="Enter your password"
                      />
                      <label htmlFor="floatingPassword">
                        Enter your password
                      </label>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                      <div className="form-validationB">
                        {formik.errors.password}
                      </div>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="form-floating">
                      <input
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passwordConfirm}
                        className="form-control"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        aria-describedby="passwordConfirm"
                        placeholder="Retype the password"
                      />
                      <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>
                    {formik.touched.passwordConfirm &&
                      formik.errors.passwordConfirm && (
                        <div className="form-validationB">
                          {formik.errors.passwordConfirm}
                        </div>
                      )}
                  </div>
                  <div className="d-grid">
                    {!loading ? (
                      <button type="submit" className="btn btn-info m-b-xs">
                        Password Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-info"
                        type="button"
                        disabled=""
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        &nbsp;&nbsp;&nbsp; Processing...
                      </button>
                    )}
                  </div>
                </form>
                <div className="authent-reg">
                  <p>
                    Send request again for password reset <br />
                    <NavLink to="/forgot-password">Reset Password</NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
