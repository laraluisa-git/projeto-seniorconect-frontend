// =============================================
//  FORMULÁRIO — construção dinâmica + máscara
// =============================================

function applyMask(input) {
  input.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 7)      v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
    else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
    else if (v.length > 0) v = '(' + v;
    this.value = v;
  });
}

function buildForm(tipo) {
  const pill     = document.getElementById('form-pill');
  const title    = document.getElementById('form-title');
  const sub      = document.getElementById('form-subtitle');
  const fields   = document.getElementById('form-fields');
  const btn      = document.getElementById('submit-btn');

  if (!pill || !fields) return;

  if (tipo === 'fisica') {
    pill.className    = 'form-type-pill fisica';
    pill.textContent  = 'Pessoa Física';
    title.textContent = 'Dados do Profissional Sênior';
    sub.textContent   = 'Preencha com seus dados para fazer parte da plataforma';
    btn.className     = 'btn-submit cyan';

    fields.innerHTML = `
      <div class="fg">
        <label>Nome completo</label>
        <input type="text" placeholder="Seu nome completo" required>
      </div>
      <div class="fg">
        <label>E-mail</label>
        <input type="email" placeholder="seu@email.com" required>
      </div>
      <div class="fg">
        <label>WhatsApp</label>
        <input id="wa" type="tel" placeholder="(XX) XXXXX-XXXX" maxlength="16" required>
      </div>
      <div class="fg">
        <label>Área de Experiência Sênior</label>
        <select required>
          <option value="" disabled selected>Selecione sua área</option>
          <option>Administração e Corretagem de Imóveis</option>
          <option>Artesanato</option>
          <option>Artes Plásticas e Escultura</option>
          <option>Agricultura Familiar</option>
          <option>Contabilidade</option>
          <option>Culinária</option>
          <option>Produção Musical</option>
          <option>Tecnologia e Computação</option>
        </select>
      </div>
      <div class="fg full">
        <label>Escolaridade</label>
        <select required>
          <option value="" disabled selected>Selecione sua escolaridade</option>
          <option>Fundamental</option>
          <option>Nível médio completo</option>
          <option>Superior completo</option>
          <option>Pós-graduação (Mestrado/Doutorado)</option>
        </select>
      </div>
      <div class="fg full">
        <label>Trabalhos realizados / Portfólio</label>
        <textarea placeholder="Descreva sua trajetória, projetos e experiências relevantes..."></textarea>
      </div>
    `;

  } else {
    pill.className    = 'form-type-pill juridica';
    pill.textContent  = 'Pessoa Jurídica';
    title.textContent = 'Dados da Empresa';
    sub.textContent   = 'Cadastre sua empresa e conecte-se com talentos seniores';
    btn.className     = 'btn-submit';

    fields.innerHTML = `
      <div class="fg full">
        <label>Nome da Empresa</label>
        <input type="text" placeholder="Razão social ou nome fantasia" required>
      </div>
      <div class="fg">
        <label>Área de Atuação</label>
        <select required>
          <option value="" disabled selected>Selecione a área</option>
          <option>Tecnologia e TI</option>
          <option>Educação e Treinamento</option>
          <option>Saúde e Bem-estar</option>
          <option>Consultoria e Gestão</option>
          <option>Varejo e Comércio</option>
          <option>Indústria e Manufatura</option>
          <option>Finanças e Contabilidade</option>
          <option>Cultura e Arte</option>
          <option>Agronegócio</option>
          <option>Terceiro Setor / ONGs</option>
          <option>Outro</option>
        </select>
      </div>
      <div class="fg">
        <label>E-mail corporativo</label>
        <input type="email" placeholder="contato@empresa.com.br" required>
      </div>
      <div class="fg">
        <label>WhatsApp</label>
        <input id="wa" type="tel" placeholder="(XX) XXXXX-XXXX" maxlength="16" required>
      </div>
      <div class="fg">
        <label>Nome do Responsável</label>
        <input type="text" placeholder="Nome do contato principal" required>
      </div>
    `;
  }

  // Aplicar máscara após injetar o HTML
  setTimeout(() => {
    const wa = document.getElementById('wa');
    if (wa) applyMask(wa);
  }, 30);
}

// Inicializa o formulário ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  const tipo = getParam('tipo') || 'fisica';
  buildForm(tipo);
});
