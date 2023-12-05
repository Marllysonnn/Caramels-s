const scroll = document.querySelector('.carrossel');
const container = document.querySelector('.container');
const scroll2 = document.querySelector('.carrossel2');
const container2 = document.querySelector('.container2');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const left2 = document.querySelector('#left2');
const right2 = document.querySelector('#right2');
const rolling = document.querySelector('.container_grid')
const racoes = document.querySelector(".racao");
const brinquedos = document.querySelector(".brinquedos");
const casas = document.querySelector(".casas");

let inputAberto = false;
let marginLeftValue = 0;
let marginLeftValue2 = 0;

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
function leftDirec2() {
  if (marginLeftValue2 > -102) {
    marginLeftValue2 -= 51;
    scroll2.style.marginLeft = marginLeftValue2 + 'em';
    scroll2.style.transition = '2s';
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
function rightDirec2() {
  if (marginLeftValue2 < 0) {
    marginLeftValue2 += 51;
    scroll2.style.marginLeft = marginLeftValue2 + 'em';
    scroll2.style.transition = '2s';
  }
}

function updateRadioState(index) {
  const radioButtons = document.getElementsByName('opcao');
  radioButtons.forEach((radioButton, i) => {
    radioButton.checked = i === index;
  });
}

function rollingRacao() {
  rolling.style.marginLeft = "200%";
  rolling.style.transition = '2s';
}
function rollingBrinquedo() {
    rolling.style.marginLeft = '0%';
    rolling.style.transition = '2s';
}
function rollingCasas() {
  rolling.style.marginLeft = "-200%";
  rolling.style.transition = '2s';
}

window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 80) {
    header.style.background = "#EDAB46";
    header.style.transition = "0.5s"
    header.style.borderBottom = "solid #966823";
  } else {
    header.style.background = "";
    header.style.borderBottom = "none";
  }
});


window.addEventListener('click', handleClickOutside);
left.addEventListener('click', rightDirec);
right.addEventListener('click', leftDirec);
left2.addEventListener('click', rightDirec2);
right2.addEventListener('click', leftDirec2);
container.addEventListener('click', arrastar);
input.addEventListener('click', abrirInput);
racoes.addEventListener('click', rollingRacao)
brinquedos.addEventListener('click', rollingBrinquedo);
casas.addEventListener('click', rollingCasas)

