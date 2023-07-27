import { FcPlus } from "react-icons/fc";
function ModalAddUser() {
  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            UserName
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Role
          </label>
          <select id="inputState" className="form-select">
            <option selected>User</option>
            <option>Admin</option>
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="label-upload" className="form-label  w-fit px-4 py-2 bg-gray-200 hover:bg-slate-300 active:bg-slate-500 cursor-pointer flex items-center gap-2 rounded-md ">
            <FcPlus /> Upload File Image
          </label>
          <input type="file" hidden id="label-upload" />
        </div>
        <div className=" img-preview h-[400px] border-dashed	border-[1px] border-red-800 flex items-center justify-center  text-gray-500 ">
          <span>Preview Image</span>
          <img
            className="max-h-[100%] max-w-[100%] object-contain"
            src=" https://lh3.googleusercontent.com/p/AF1QipNL0ACltng_PWEzPPnA_F3knrjhHPvXmB4BYCYd=s680-w680-h510 "
            alt=""
          />
        </div>
      </form>
    </div>
  );
}

export default ModalAddUser;
