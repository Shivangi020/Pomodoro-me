const ModalReducer = (modalState, action) => {
  const { showModal,translateVar } = modalState;

  switch (action.type) {
    case "CLOSE":
      return { ...modalState, showModal: { ...showModal, isModalOpen: false } };
    case "OPEN":
      return {
        ...modalState,
        showModal: { ...showModal, isModalOpen: true },
    };
    case "TRANSLATE":
      return {
        ...modalState,
           translateVar:{...translateVar ,measurement:action.payload}
      }
    default:
      return modalState;
  }
};

export default ModalReducer;
