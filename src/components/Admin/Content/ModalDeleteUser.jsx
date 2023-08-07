import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../services/apiService";
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete, fetchListUsers } = props;
  const handleClose = () => setShow(false);
  const handleSubmitDeleteUser = async () => {
    let data = await deleteUser(dataDelete.id);
    console.log(
      "🚀 ~ file: ModalCreateUser.jsx:54 ~ handleSubmitCreateUser ~ data:",
      data
    );
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
      {/* <Button variant="primary">Launch demo modal</Button> */}
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this use. email ={" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
