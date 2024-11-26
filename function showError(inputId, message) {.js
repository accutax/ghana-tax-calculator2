function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;

  input.classList.add('error');
  input.parentNode.appendChild(errorDiv);

  setTimeout(() => {
      errorDiv.remove();
      input.classList.remove('error');
  }, 3000);
}