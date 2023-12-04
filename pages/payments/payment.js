document.addEventListener('DOMContentLoaded', function() {
    const pix = document.querySelector('#pix');
    const cre = document.querySelector('#credito');
    const bol = document.querySelector('#boleto');
    const sect = document.querySelector('.payments');
    const titulo = document.querySelector('.titl');
    const overlayPIX = document.querySelector('.PIX');
    const overlayCredit = document.querySelector('.credito');
    const overlayBol = document.querySelector('.boleto');
    const fecharImagens = document.querySelectorAll('.fechar');
    const comprar = document.querySelector('#comprar');
    const compra = document.querySelector('.comprar_efetu');
    const cadastrar = document.querySelector('#cadast');
    const cadastrado = document.querySelector('.cartao_cadas');
    const cartaoConfirmado = document.querySelector('.confir_cartao')
    const compraNao = document.querySelector('.comprar_n_efetu')
    const sim = document.querySelector('.sim');
    const nao = document.querySelector('.nao')

    overlayPIX.style.display = "none";
    overlayCredit.style.display = "none";
    overlayBol.style.display = "none";
    compra.style.display = "none";
    cadastrado.style.display = "none";
    cartaoConfirmado.style.display = "none";
    compraNao.style.display = "none";

    function openOverlayPix() {
        overlayPIX.style.display = "block";
        sect.style.display = "none";
        titulo.style.display = "none";
    }
    function openOverlayCred (){
        overlayCredit.style.display = "block";
        sect.style.display = "none";
        titulo.style.display = "none";
    }
    function openOverlayBol () {
        overlayBol.style.display = "block";
        sect.style.display = "none";
        titulo.style.display = "none";
    }
    function closeOverlay() {
        overlayPIX.style.display = "none";
        overlayCredit.style.display = "none";
        overlayBol.style.display = "none";
        sect.style.display = "flex";
        titulo.style.display = "block";
    }

    function fecharAlerta(event) {
        const fechar = event.target.closest('.fechar');
        const alerta = event.target.closest('section');
        if (fechar) {
            alerta.style.display = 'none';
            closeOverlay();
        }
    }

    fecharImagens.forEach(imagem => {
        imagem.addEventListener('click', fecharAlerta);
    });

    function cartaoAdd () {
        overlayPIX.style.display = "none";
        overlayCredit.style.display = "none";
        overlayBol.style.display = "none";
        cadastrado.style.display = "flex";
    }
    function desejaComprar () {
        overlayPIX.style.display = "none";
        overlayCredit.style.display = "none";
        overlayBol.style.display = "none";
        cartaoConfirmado.style.display = "flex";
    }
    function compraNegada () {
        overlayPIX.style.display = "none";
        overlayCredit.style.display = "none";
        overlayBol.style.display = "none";
        compraNao.style.display = "flex";
    }
    function compraEfetuada () {
        overlayPIX.style.display = "none";
        overlayCredit.style.display = "none";
        overlayBol.style.display = "none";
        compra.style.display = "flex";
    }
    
    sim.addEventListener('click', compraEfetuada)
    nao.addEventListener('click', compraNegada);
    comprar.addEventListener('click', desejaComprar)
    cadastrar.addEventListener('click', cartaoAdd);
    pix.addEventListener('click', openOverlayPix);
    cre.addEventListener('click', openOverlayCred);
    bol.addEventListener('click', openOverlayBol);

});
