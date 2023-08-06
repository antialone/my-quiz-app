import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/apiService";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalViewUser from "./ModalViewUser";
import ModalDeleteUser from "./ModalDeleteUser";

function ManageUser(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModelDeleteUser, setShowModelDeleteUser] = useState(false);
  const [showModalView, setShowModalView] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDelete, setDataDelete] = useState({});
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
  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalView(true);
    setDataUpdate(user);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const handleClickBtDelete = (user) => {
    setDataDelete(user);
    setShowModelDeleteUser(true);
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
          <TableUser
            listUsers={listUsers}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtDelete={handleClickBtDelete}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          fetchListUsers={fetchListUsers}
          setShow={setShowModalCreateUser}
        />
        <ModalUpdateUser
          dataUpdate={dataUpdate}
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalView}
          setShow={setShowModalView}
          dataUpdate={dataUpdate}
        />
        <ModalDeleteUser
          dataDelete={dataDelete}
          handleClickBtDelete={handleClickBtDelete}
          show={showModelDeleteUser}
          setShow={setShowModelDeleteUser}
          fetchListUsers={fetchListUsers}

        />
      </div>
    </div>
  );
}

export default ManageUser;
