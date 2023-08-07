import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../services/apiService";
import _ from "lodash";
function ModalUpdateUser(props) {
  const { show, setShow, fetchListUsers, dataUpdate } = props;
  const handleClose = () => {
    setShow(false),
      setEmail(""),
      setImage(""),
      setRole("USER"),
      setPassWord(""),
      setUsername("");
    setPreviewImage("");
    props.resetUpdateData();
  };
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassWord] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  //
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
  const handleUploadImage = (e) => {
    // nếu người dùng k up ảnh thì k set
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]),
        setPreviewImage(URL.createObjectURL(e.target.files[0]));
    } else {
      // SetPreviewImage("");
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitCreateUser = async () => {
    // validate
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("invalid email");
      return;
    }
    //call api Form axios từ function  postCreateNewUser
    let data = await putUpdateUser(dataUpdate.id, username, role, image);
    //EC --> error code
    //EM --> error mess
    //res-->  dữ liêuj từ backend phản hồi. res.data
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await fetchListUsers();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  onChange={(e) => {
                    setPassWord(e.target.value);
                  }}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">username</label>
                <input
                  type="text"
                  value={username}
                  className="form-control"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">Role</label>
                <select
                  id="inputState"
                  value={role}
                  onChange={(e) => {
                    setRole(e.target.value);
                  }}
                  className="form-select"
                >
                  <option>User</option>
                  <option>Admin</option>
                </select>
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="label-upload"
                  className="form-label  w-fit px-4 py-2 bg-gray-200 hover:bg-slate-300 active:bg-slate-500 cursor-pointer flex items-center gap-2 rounded-md "
                >
                  <FcPlus /> Upload File Image
                </label>
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
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitCreateUser();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalUpdateUser;
