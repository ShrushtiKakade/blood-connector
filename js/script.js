document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

  document.querySelectorAll('[data-demo-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('.form-message');
      if (message) {
        message.textContent = form.dataset.success || 'Done. Your request has been recorded.';
        message.hidden = false;
      }
    });
  });

  document.querySelectorAll('[data-filter]').forEach((input) => {
    input.addEventListener('input', () => {
      const query = input.value.toLowerCase();
      document.querySelectorAll('[data-filter-row]').forEach((row) => {
        row.hidden = !row.textContent.toLowerCase().includes(query);
      });
    });
  });
});
