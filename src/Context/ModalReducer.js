const ModalReducer = (modalState, action) => {
  const { showModal } = modalState;

  switch (action.type) {
    case "CLOSE":
      return { ...modalState, showModal: { ...showModal, isModalOpen: false } };
    case "OPEN":
      return {
        ...modalState,
        showModal: { ...showModal, isModalOpen: true },
    };
    default:
      return modalState;
  }
};

export default ModalReducer;
