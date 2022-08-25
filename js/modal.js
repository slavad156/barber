(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMenu: document.querySelector('[data-modal-open-menu]'),
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    openModalBtnPrice: document.querySelector('[data-modal-open-price]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('[data-page]'),
    menu: document.querySelector('.backdrop-mob'),
    openMenuBtn: document.querySelector('.js-open-menu'),
    closeMenuBtn: document.querySelector('.js-close-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMenu.addEventListener('click', toggleModal);
  refs.openModalBtnAbout.addEventListener('click', toggleModal);
  refs.openModalBtnPrice.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function toggleMenu() {
    refs.menu.classList.toggle('hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
