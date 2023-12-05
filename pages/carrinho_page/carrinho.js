const excluir = document.querySelector('.excluir')
const deletar = document.querySelector('.products')

function deletarProduto () {
  deletar.style.display = "none";
}

excluir.addEventListener('click', deletarProduto)
