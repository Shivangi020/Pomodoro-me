import React, { useContext } from "react";
import Cross from "../ModalComponents/Cross";
import Sidebar from "../ModalComponents/Sidebar";
import SettingWindow from "../ModalComponents/SettingWindow";
import { createPortal } from "react-dom";
import { ModalContext } from "../Context/GlobalState";
import SaveButton from "../ModalComponents/SaveButton";

function Modal() {
  const { showModal } = useContext(ModalContext);

  if (showModal.isModalOpen === false) {
    return null;
  } else {
    return createPortal(
      <div className="modal-main">
        <div className="modal-window">
          <Cross />
          <div className="modal-cn">
            <Sidebar />
            <SettingWindow />
          </div>
          <SaveButton/>
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;
