import React from "react";
import "./Nav.css";
import { Modal } from "../Modal";
import ModalForm from "../ModalForm";

const Nav = () => {
  const [openModal, setOpenModal] = React.useState(false);

  function handleClickOpen() {
    return setOpenModal(true);
  }

  return (
    <React.Fragment>
      <nav className="nav-container">
        <div className="form">
          <h3>Let's Create Your User</h3>
          <button onClick={handleClickOpen}>Add User</button>
        </div>
      </nav>
      {openModal && (
        <Modal>
          <ModalForm />
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Nav;
