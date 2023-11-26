const input = document.querySelector('input');
const pesquisa = document.querySelector('.pesquisa');
const lupa = document.querySelector('.lupa')
let inputAberto = false;

function abrirInput() {
  input.style.width = '22em';
  input.style.transition = '0.5s';
  inputAberto = true;
}

function fecharInput() {
  if (inputAberto) {
    input.style.width = '0em';
    input.style.transition = '0.5s';
    inputAberto = false;
  }
}

function handleClickOutside(event) {
  // Verifica se o clique ocorreu fora do input e fecha-o se estiver aberto
  if (inputAberto && !lupa.contains(event.target) && !input.contains(event.target)) {
    fecharInput();
  }
}

window.addEventListener('click', handleClickOutside);
lupa.addEventListener('click', abrirInput);
