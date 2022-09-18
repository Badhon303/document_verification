import React, { useState } from "react";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { getLoggedInUser } from "../libs/AuthContainer";
import { BASE_URL } from "../constants";
import { useHistory } from "react-router-dom";

export default function ImageUploadModal(props) {
  const user = getLoggedInUser();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [picture, setPicture] = useState({
    picturePreview: null,
    pictureAsFile: null,
  });

  const uploadPicture = async (e) => {
    let file_size = e.target.files[0].size;
    if (file_size <= 10000000) {
      setPicture({
        /* contains the preview, if you want to show the picture to the user
        you can access it with this.state.currentPicture */
        picturePreview: URL.createObjectURL(e.target.files[0]),
        /* this contains the file we want to send */
        pictureAsFile: e.target.files[0],
      });
    } else
      Swal.fire("Upload failed", "Please Upload File Less than 10MB", "Error");
  };

  const postImage = async (e) => {
    e.preventDefault();
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("access-token"));
    const formData = new FormData();
    formData.append("profile-photo", picture.pictureAsFile);

    const data = await fetch(
      `${BASE_URL}/users/${user.id}/upload-profile-photo`,
      {
        method: "put",
        headers: myHeaders,
        body: formData,
      }
    );

    const uploadedImage = await data.json();
    if (uploadedImage && uploadedImage.success === true) {
      setLoading(false);
      let newPhotoUrl = uploadedImage.data.data;
      user.photo = newPhotoUrl;
      localStorage.setItem("auth-user", JSON.stringify(user));
      history.go("/");
    } else {
      Swal.fire("Upload failed", "Upload Error", "Error");
    }
  };

  return (
    <div
      className="modal fade"
      id="ImageModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Upload Picture
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              onChange={uploadPicture}
              type="file"
              id="image1"
              name="image1"
              accept="image/*"
              style={{ display: "none" }}
            />
            <div className="text-center">
              <label htmlFor="image1">
                <img
                  width="200px"
                  height="200px"
                  src={
                    picture.picturePreview
                      ? picture.picturePreview
                      : "./assets/images/avatar.png"
                  }
                  alt="Avatar"
                />
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary m-b-xs"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            {!loading ? (
              <button
                type="submit"
                className="btn btn-info m-b-xs"
                onClick={postImage}
              >
                Save
              </button>
            ) : (
              <button className="btn btn-info m-b-xs" type="button" disabled="">
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                &nbsp;&nbsp;&nbsp; Processing...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
