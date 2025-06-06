
const OpenCloseModal = (e) => {
  const btnElement = e.target;

  const setModalDataset = (element) => {
    if (element.dataset.modalActive === 'false') {
      element.dataset.modalActive = 'true'
    } else {
      element.dataset.modalActive = 'false'
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