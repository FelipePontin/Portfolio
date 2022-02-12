const btnsSetaLinguagem = document.querySelectorAll(".botao-linguagem")

btnsSetaLinguagem.forEach( btnSetaLinguagem => {
    btnSetaLinguagem.addEventListener("click", () => {
        const resumoLinguagem = btnSetaLinguagem.nextElementSibling
        resumoLinguagem.classList.toggle("resumoOpen")
    })
})