import React, { useContext, useEffect, useState } from "react";
import Cross from "../ModalComponents/Cross";
import Sidebar from "../ModalComponents/Sidebar";
import SettingWindow from "../ModalComponents/SettingWindow";
import { createPortal } from "react-dom";
import { ModalContext } from "../Context/GlobalState";
import SaveButton from "../ModalComponents/SaveButton";

function Modal() {
  const { showModal } = useContext(ModalContext);
  const [translate,setTranslate] = useState(0)

  useEffect(()=>{
    if(showModal.isModalOpen){
      setTranslate(600)
    }else{
      setTranslate(0)
    }

  },[showModal.isModalOpen])
  
  if (showModal.isModalOpen === false) {
    return null;
  } else {
    return createPortal(
      <div className="modal-main">
        <div
          className='modal-window' style={{transform:`translateY(${-600+translate}px)` ,transition:'transform .5s ease-in'}}>
          <Cross />
          <div className="modal-cn">
            <Sidebar />
            <SettingWindow />
          </div>
          <SaveButton />
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;
