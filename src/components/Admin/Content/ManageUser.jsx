import ModalUser from "./ModalUser";
function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <div>
          <button>Add user</button>
        </div>
        <div>table user</div>
        <ModalUser />
      </div>
    </div>
  );
}

export default ManageUser;
