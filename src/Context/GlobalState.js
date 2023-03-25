import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import ModalReducer from "./ModalReducer";

// INITIAL STATE --->
const initialState = {
  timer: {
    pomodoro: { min: 120, hour: 0, second: 0 },
    long_break: 15,
    short_break: 5,
  },

  theme: {
    color: "#245953",
    background_color: "#408E91",
    color2: "#ffffff",
  },
};

// MODAL Initial state --->
const modalInitialState = {
  showModal: {
    isModalOpen: false,
  },
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

  //ACTIONS  FOR MODAL --->
  const closeModal = () => {
    modalDispatch({ type: "CLOSE" });
  };
  const openModal = () => {
    modalDispatch({ type: "OPEN" });
  };

  return (
    <ModalContext.Provider
      value={{ showModal: modalState.showModal, closeModal, openModal }}
    >
      <GlobalContext.Provider
        value={{ timer: state.timer, theme: state.theme }}
      >
        {children}
      </GlobalContext.Provider>
    </ModalContext.Provider>
  );
};

export default GlobalProvider;
