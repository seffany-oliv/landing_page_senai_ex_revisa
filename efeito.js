//captura do botão e do menu
const botao = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');

//criar o evento de clique
botao.addEventListener('click',()=>{
    //ativa e desativa a classe aberto (usando: Toggle)
    menu.classList.toggle('aberto');
});
