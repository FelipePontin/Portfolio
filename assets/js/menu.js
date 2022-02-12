const btnMenu = document.querySelector(".botao-menu")
const menu = document.querySelector(".menu")

btnMenu.addEventListener("click", () => {
    btnMenu.classList.toggle("cliked")
    menu.classList.toggle("menuOpen")
})