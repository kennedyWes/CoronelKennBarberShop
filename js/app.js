import {valida} from "./validacao.js"

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })
})

const form = document.querySelector('.formulario-cadastro-novo')
    form.onsubmit = function(evento) {
        evento.preventDefault();
        window.location.href="cadastro_concluido.html"
    }

const formAntigo = document.querySelector('.formulario-cadastro-antigo')
    formAntigo.onsubmit = function(evento) {
        evento.preventDefault();
        window.location.href="index.html"
    }

