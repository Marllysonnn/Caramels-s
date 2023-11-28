const input = document.querySelector('.input');
const lupa = document.querySelector('.lupa');
const scroll = document.querySelector('.carrossel');
const container = document.querySelector('.container');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let inputAberto = false;
let marginLeftValue = 0;

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
  if (inputAberto && !lupa.contains(event.target) && !input.contains(event.target)) {
    fecharInput();
  }
}

function arrastar(index) {
  const radioButton = document.getElementById('opcao' + (index + 1));
  radioButton.checked = true;
  if (radioButton.checked) {
    marginLeftValue = -51 * index;
    scroll.style.marginLeft = marginLeftValue + 'em';
    scroll.style.transition = '2s';
    const newIndex = Math.abs(marginLeftValue / 51);
    updateRadioState(newIndex);
  }
}

function leftDirec() {
  if (marginLeftValue > -102) {
    marginLeftValue -= 51;
    scroll.style.marginLeft = marginLeftValue + 'em';
    scroll.style.transition = '2s';
    const index = Math.abs(marginLeftValue / 51);
    updateRadioState(index);
  }
}

function rightDirec() {
  if (marginLeftValue < 0) {
    marginLeftValue += 51;
    scroll.style.marginLeft = marginLeftValue + 'em';
    scroll.style.transition = '2s';
    const index = Math.abs(marginLeftValue / 51);
    updateRadioState(index);
    
  }
}

function updateRadioState(index) {
  const radioButtons = document.getElementsByName('opcao');
  radioButtons.forEach((radioButton, i) => {
    radioButton.checked = i === index;
  });
}

window.addEventListener('click', handleClickOutside);
left.addEventListener('click', rightDirec);
right.addEventListener('click', leftDirec);
container.addEventListener('click', arrastar);
lupa.addEventListener('click', abrirInput);
