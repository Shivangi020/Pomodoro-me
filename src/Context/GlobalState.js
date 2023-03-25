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
    dark: "#245953",
    light: "#408E91",
  },
};

// MODAL Initial state --->
const modalInitialState = {
  showModal: {
    isModalOpen: true,
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
