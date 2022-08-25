(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    openModalBtnPrice: document.querySelector('[data-modal-open-price]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMenu.addEventListener('click', toggleModal);
  refs.openModalBtnAbout.addEventListener('click', toggleModal);
  refs.openModalBtnPrice.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-modal');
  }
})();
