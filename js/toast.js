// =============================================
//  TOAST — feedback visual de envio
// =============================================

function submitForm(e) {
  e.preventDefault();

  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
    // Volta para a home após 2.8s
    window.location.href = 'index.html';
  }, 2800);
}
