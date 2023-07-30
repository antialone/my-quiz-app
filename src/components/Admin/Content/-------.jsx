import { useState } from "react";
import { FcPlus } from "react-icons/fc";

function ModalAddUser() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, SetPreviewImage] = useState("");
  const handleUploadImage = (e) => {
    // nếu người dùng k up ảnh thì k set
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]),
        SetPreviewImage(URL.createObjectURL(e.target.files[0]));
    } else {
      // SetPreviewImage("");
    }
  }
  
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
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
            value={passWord}
            className="form-control"
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">UserName</label>
          <input
            type="text"
            value={userName}
            className="form-control"
            onChange={(e) => {
              setUserName(e.target.value);
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
        <div className=" img-preview h-[400px] border-dashed	border-[1px] border-red-800 flex items-center justify-center  text-gray-500 ">
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
  );
}

export default ModalAddUser;
