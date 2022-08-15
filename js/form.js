(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();
    e.currentTarget.reset();
  });
})();
