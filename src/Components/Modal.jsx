import React, { useContext, useEffect, useState } from "react";
import Cross from "../ModalComponents/Cross";
import Sidebar from "../ModalComponents/Sidebar";
import SettingWindow from "../ModalComponents/SettingWindow";
import { createPortal } from "react-dom";
import { ModalContext,GlobalContext } from "../Context/GlobalState";
import SaveButton from "../ModalComponents/SaveButton";

function Modal() {
  const { showModal } = useContext(ModalContext);
  const {timer} = useContext(GlobalContext)
  const {pomodoro, short_break, long_break} = timer
  const themeIndex = localStorage.getItem('index')?JSON.parse(localStorage.getItem('index')):0
  const [translate,setTranslate] = useState(0)
  const [themeSelect ,setThemeSelect] = useState(themeIndex)
  const [timeSelect ,setTimeSelect] = useState({
    pomodoro:pomodoro,
    long_break:long_break,
    short_break:short_break
  })

  useEffect(()=>{
    if(showModal.isModalOpen){
      setTranslate(600)
    }else{
      setTranslate(0)
    }
  },[showModal.isModalOpen])
  
  const themeSelectHandler = (index)=>{
         localStorage.setItem('index',index)
         setThemeSelect(index)
  }
  
  const pomodorTimeHandler = (e) =>{
    if(e.target.value<=120){
      setTimeSelect({...timeSelect,pomodoro:e.target.value})
    }else{
      alert('Maximun time limit for pomodoro is 120 minutes')
    }
  }
  const shortTimeHandler = (e) =>{
    if(e.target.value<=15){
      setTimeSelect({...timeSelect,short_break:e.target.value})
    }else{
      alert('Maximun time limit for short break is 15 minutes')
    }
   
  }
  const longTimeHandler = (e) =>{
    if(e.target.value<=30){
      setTimeSelect({...timeSelect,long_break:e.target.value})
    }else{
      alert('Maximun time limit for long break is 30 minutes')
    }
    
  }

  if (showModal.isModalOpen === false) {
    return null;
  } else {
    return createPortal(
      <div className="modal-main">
        <div
          className='modal-window ' style={{transform:`translateY(${-600+translate}px)` ,transition:'transform .3s ease-out'}}>
          <Cross />
          <div className="modal-cn">
            <Sidebar />
            <SettingWindow actionState = {{themeSelectHandler,pomodorTimeHandler,shortTimeHandler,longTimeHandler,timeSelect}}/>
          </div>
          <SaveButton actionState = {{themeSelect,timeSelect}} />
        </div>
      </div>,
      document.body
    );
  }
}

export default Modal;
