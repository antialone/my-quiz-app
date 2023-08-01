import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/apiService";

function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let res = await getAllUsers();
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };
  return (
    <div className="manage-user-container p-[10px]">
      <div className="title font-semibold text-xl  ">Manager User</div>
      <div className="user-content">
        <div className="btn-add-new ">
          <button
            className="rounded-lg py-[4px] px-[10px]  "
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new user
          </button>
        </div>
        <div className="table-user">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          fetchListUsers={fetchListUsers}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
}

export default ManageUser;
