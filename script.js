function menuShow() {
    let btnMenu = document.querySelector('.menu-mobile');
    if (btnMenu.classList.contains('open')) {
        btnMenu.classList.remove('open');
        document.querySelector('.btn').src = "./img/hamburguer.png";
    } else {
        btnMenu.classList.add('open');
        document.querySelector('.btn').src = "./img/fechar.png";
    }
}