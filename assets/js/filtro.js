const inputFiltro = document.querySelector(".input-filtro")
const nomesProjetos = document.querySelectorAll(".nome-projeto")

inputFiltro.addEventListener("input", () => {

    if(inputFiltro.value.length > 0) {
        nomesProjetos.forEach(projeto => {

            const nome = projeto.textContent
            const card = projeto.parentNode.parentNode

            const expressao = new RegExp(inputFiltro.value, "i")

            if(!expressao.test(nome)) {
                card.classList.add("esconder")
            }
            else {
                card.classList.remove("esconder")
            }
        })
    }
    else {
        nomesProjetos.forEach(projeto => {
            
            const card = projeto.parentNode.parentNode
            card.classList.remove("esconder")
        })
    }
})