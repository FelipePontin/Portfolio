const cards = document.querySelectorAll(".card")

// const shadows = [
//     "#e44c2228 0px 2px 4px 0px, #e44c2228 0px 2px 16px 0px",
//     "#2552e828 0px 2px 4px 0px, #2552e828 0px 2px 16px 0px",
//     "#cc649b28 0px 2px 4px 0px, #cc649b28 0px 2px 16px 0px",
//     "#f3e31b28 0px 2px 4px 0px, #f3e31b28 0px 2px 16px 0px",
//     "#3474a628 0px 2px 4px 0px, #3474a628 0px 2px 16px 0px"
// ]

cards.forEach((card, selecionado) => {
    card.addEventListener("click", () => {
        const resumo = card.lastElementChild
        resumo.classList.toggle("resumoOpen")
        // card.style.boxShadow = shadows[selecionado]
        // card.style.boxShadow = "transparent"
    })
})
