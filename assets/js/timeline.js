document.querySelectorAll('.cv_toggle').forEach(button => {
  button.addEventListener('click', function () {
    const wrapper = this.closest('.cv_item-wrapper');

    wrapper.classList.toggle('open');
    this.textContent = wrapper.classList.contains('open') ? 'Voir moins' : 'Voir plus';
  });
});

