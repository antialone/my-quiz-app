import FormSignIn from "./FormSignIn";
import ModalUser from "./ModalUser";
function ManageUser(props) {
  return (
    <div className="manage-user-container">
      <div className="title">Manager User</div>
      <div className="user-content">
        <div>
          <button>
            <ModalUser />
          </button>
        </div>
        <div>table user</div>
      </div>
    </div>
  );
}

export default ManageUser;
