import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import ModalReducer from "./ModalReducer";


const dark = localStorage.getItem('dark') ? localStorage.getItem('dark') :"#245953"
const light = localStorage.getItem('light') ? localStorage.getItem('light') :"#408E91"
const pomodoro = localStorage.getItem('pomodoro') ? JSON.parse(localStorage.getItem('pomodoro')):25
const long_break = localStorage.getItem('long_break') ? JSON.parse(localStorage.getItem('long_break')):15
const short_break =localStorage.getItem('short_break') ? JSON.parse(localStorage.getItem('short_break')):5

// INITIAL STATE --->
const initialState = {
  timer: {
    pomodoro: pomodoro,
    long_break: long_break,
    short_break:short_break,
  },
  
  theme: {
    dark: dark,
    light: light,
  },
};

// MODAL INITIAL STATE --->
const modalInitialState = {
  showModal: {
    isModalOpen: false,
  },
  translateVar:{
    measurement  :0
  }
};

// Creating Global Context
export const GlobalContext = createContext(initialState);
export const ModalContext = createContext(modalInitialState);

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [modalState, modalDispatch] = useReducer(
    ModalReducer,
    modalInitialState
  );

  //ACTIONS FOR MODAL --->
  const closeModal = () => {
    modalDispatch({ type: "CLOSE" });
  };
  const openModal = () => {
    modalDispatch({ type: "OPEN" });
  };
  const translateAction = (msr)=>{
        modalDispatch({type:'TRANSLATE' ,payload:msr})
  };


  // ACTIONS FOR POMODORO INPUTS --->
  const saveChange = (theme,timer)=>{
    dispatch({type:'SAVE_CHANGE' ,payload:{theme,timer}})
  }



  
  return (
    <ModalContext.Provider
      value={{ showModal: modalState.showModal ,translateVar:modalState.translateVar, closeModal, openModal ,translateAction}}
    >
      <GlobalContext.Provider
        value={{ timer: state.timer, theme: state.theme ,saveChange}}
      >
        {children}
      </GlobalContext.Provider>
    </ModalContext.Provider>
  );
};

export default GlobalProvider;
