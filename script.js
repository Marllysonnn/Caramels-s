const input = document.querySelector('.input');
const lupa = document.querySelector('.lupa')
const scroll = document.querySelector('.carrossel')
const container = document.querySelector('.container')

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

function arrastar(index) {
  const radioButton = document.getElementById('opcao' + (index + 1));

        if (radioButton.checked) {
            const marginLeftValue = -51 * index + 'em';
            scroll.style.marginLeft = marginLeftValue;
            scroll.style.transition = '2s';
}}

window.addEventListener('click', handleClickOutside);
container.addEventListener('click', arrastar);
lupa.addEventListener('click', abrirInput);
