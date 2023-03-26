import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import ModalReducer from "./ModalReducer";

// INITIAL STATE --->
const initialState = {
  timer: {
    pomodoro: 25,
    long_break: 15,
    short_break: 5,
  },

  theme: {
    dark: "#245953",
    light: "#408E91",
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
