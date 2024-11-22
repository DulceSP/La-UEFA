// Validación de Formularios
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
  
    forms.forEach((form) => {
      form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input, select');
        let valid = true;
  
        inputs.forEach((input) => {
          if (!input.value.trim()) {
            valid = false;
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
  
        if (!valid) {
          event.preventDefault();
          alert('Por favor, completa todos los campos.');
        }
      });
    });
  });
  