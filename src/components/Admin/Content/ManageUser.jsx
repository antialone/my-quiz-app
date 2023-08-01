import { useState } from "react";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";

function ManageUser(props) {
  const [showModalCreateUser,setShowModalCreateUser] =useState(false)

  return (
    <div className="manage-user-container p-[10px]">
      <div className="title font-semibold text-xl  ">Manager User</div>
      <div className="user-content">
        <div className="btn-add-new ">
          <button className="rounded-lg py-[4px] px-[10px]  " 
          onClick={()=>setShowModalCreateUser(true)}>
          <FcPlus/>  Add new user
          </button>
        </div>
        <div className="table-user"><TableUser/></div>
        <ModalCreateUser show ={showModalCreateUser} setShow ={setShowModalCreateUser} />
      </div>
    </div>
  );
}

export default ManageUser;
