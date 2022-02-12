const btnModoEscuro = document.querySelector("input[name=light-mode]")

btnModoEscuro.addEventListener("change", () => {
    if(btnModoEscuro.checked) {
        document.documentElement.setAttribute("data-theme", "light")
    }
    else {
        document.documentElement.setAttribute("data-theme", "dark")
    }
})