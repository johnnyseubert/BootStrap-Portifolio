let btn = document.getElementById('btn-hamburguer');
let menu = document.getElementById('hamburguer-menu');


btn.addEventListener('click', () => {
    menu.classList.toggle('active');
})

