import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import _ from "lodash";
function ModalViewUser(props) {
  const { show, setShow ,dataUpdate} = props;
  const handleClose = () => {
    setShow(false),
      setEmail(""),
      setImage(""),
      setRole("USER"),
      setPassWord(""),
      setUsername("");
    setPreviewImage("");
  };
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const handleUploadImage = (e) => {
    // nếu người dùng k up ảnh thì k set
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]),
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    } else {
      // SetPreviewImage("");
    }
  };
  useEffect(() => {
    if (!_.isEmpty(dataUpdate)) {
      setEmail(dataUpdate.email);
      setRole(dataUpdate.role);
      setUsername(dataUpdate.username);
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  disabled
                  type="email"
                  value={email}
                  className="form-control"
                 
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  disabled
                  type="current-password"
                  value={password}
                  className="form-control"
                 
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">username</label>
                <input
                  disabled
                  type="text"
                  value={username}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Role</label>
                <select
                  disabled
                  id="inputState"
                  value={role}
                  className="form-select"
                >
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="col-md-12">
                <input
                  type="file"
                  hidden
                  id="label-upload"
                  onChange={(e) => {
                    handleUploadImage(e);
                  }}
                />
              </div>
              <div className=" img-preview h-[300px] border-dashed	border-[1px] border-red-800 flex items-center justify-center  text-gray-500 ">
                {previewImage ? (
                  <img
                    className="max-h-[100%] max-w-[100%] object-contain"
                    src={previewImage}
                  />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalViewUser;
