// =============================================
//  NAVEGAÇÃO — links entre páginas
// =============================================

// Redireciona para cadastro.html passando o tipo via URL
function irParaCadastro() {
  window.location.href = 'cadastro.html';
}

// Redireciona para formulario.html com parâmetro de tipo
function irParaFormulario(tipo) {
  window.location.href = 'formulario.html?tipo=' + tipo;
}

// Lê parâmetro da URL (usado no formulario.html)
function getParam(nome) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nome);
}
