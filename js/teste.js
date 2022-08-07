function validaSenha(input) {
	const senhaEscolhida = document.querySelector=('[data-tipo="senha1"]')
	const senhaConfirmada = document.querySelector=('[data-tipo="senha2"]')
	let mensagem =''

	if(senhaEscolhida.value != senhaConfirmada.value) {
		mensagem = 'As senhas escolhidas não são iguais'
	}
	input.setCustomValidity(mensagem)
}


senha2: input => validaSenha(input)