const overlayCarrinho = document.querySelector('.add_carrinho');
const carrinho = document.querySelector('#add');
const quantityInput = document.getElementById('numero');
const fecharImagens = document.querySelectorAll('.fechar');

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const imgPrincipal = document.getElementById('img_princ');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            trocarImagem(thumbnail.src, thumbnail.alt);
        });
    });

    function trocarImagem(src, alt) {
        // Atribuir a imagem e o alt da miniatura à imagem principal
        imgPrincipal.src = src;
        imgPrincipal.alt = alt;
    }
});

overlayCarrinho.style.display = "none";

function increment() {
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrement() {
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

function fecharAlerta(event) {
    const fechar = event.target.closest('.fechar');
    const alerta = event.target.closest('section');
    if (fechar) {
        alerta.style.display = 'none';
        closeOverlay();  // Certifique-se de definir a função closeOverlay conforme necessário
    }
}

fecharImagens.forEach(imagem => {
    imagem.addEventListener('click', fecharAlerta);
});

function openoverlayCarrinho() {
    overlayCarrinho.style.display = "flex";
}

carrinho.addEventListener('click', openoverlayCarrinho);
