const cards = document.querySelectorAll(".card")

cards.forEach((card, selecionado) => {
    card.addEventListener("click", () => {
        const resumo = card.lastElementChild
        resumo.classList.toggle("resumoOpen")
    })
})