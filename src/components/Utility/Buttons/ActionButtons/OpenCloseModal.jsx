
const OpenCloseModal = (event, modalActive, updateModalActive) => {
  const btnElement = event.target;

  const setModalDataset = (element) => {
    if (element) {
      updateModalActive()
      element.dataset.modalActive = modalActive
    }
  }

  if (btnElement) {
    const modal = document.getElementById("modal-container");
    if (modal) {
      modal.classList.toggle('hidden');
      setModalDataset(modal);
    }
  }
}

export default OpenCloseModal;