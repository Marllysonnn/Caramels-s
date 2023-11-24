const input = document.querySelector('input');
const pesquisa = document.querySelector('.pesquisa');
let isInputOpen = false;

function abrirInput() {
  input.style.width = '22em';
  input.style.transition = '0.5s';
  isInputOpen = true;
}

function fecharInput() {
  if (isInputOpen) {
    input.style.width = '0em';
    input.style.transition = '0.5s';
    isInputOpen = false;
  }
}

function handleClickOutside(event) {
  // Verifica se o clique ocorreu fora do input e fecha-o se estiver aberto
  if (isInputOpen && !pesquisa.contains(event.target) && !input.contains(event.target)) {
    fecharInput();
  }
}

window.addEventListener('click', handleClickOutside);
pesquisa.addEventListener('click', abrirInput);
