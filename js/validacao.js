export function valida(input){
	const tipoDeInput = input.dataset.tipo

	if(validadores[tipoDeInput]){
		validadores[tipoDeInput](input)
	}
}

const validadores = {
	dataNascimento: input => validaDataNascimento(input),
	cpf: input => validaCPF(input),	
	cep: input => recuperarCEP(input),
}


function validaDataNascimento(input){
	const dataRecebida = new Date(input.value)
	let mensagem = ''

	if(!maiorQue18(dataRecebida)){
       mensagem = 'Você deve ser maior de 18 anos para se cadastrar !'
    }
    
	input.setCustomValidity(mensagem)
}

function maiorQue18(data){
	const dataAtual = new Date()
	const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

	return dataMais18 <= dataAtual
}


function validaCPF(input){
	const cpfFormatado = input.value.replace(/\D/g, '')
	let mensagem = ''

	if(!checaCPFRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
		mensagem = 'O CPF digitado não é válido !'
	}

	input.setCustomValidity(mensagem)
}


function checaCPFRepetido(cpf) {
	const valoresRepetidos = [
		'00000000000',
		'11111111111',
		'22222222222',
		'33333333333',
		'44444444444',
		'55555555555',
		'66666666666',
		'77777777777',
		'88888888888',
		'99999999999'
	]
	let cpfValido = true

	valoresRepetidos.forEach(valor => {
		if(valor == cpf) {
			cpfValido = false
		}
	})

	return cpfValido
}


function checaEstruturaCPF(cpf) {
	const multiplicador = 10

	return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
	if(multiplicador >= 12) {
		return true
	}

	let multiplicadorInicial = multiplicador
	let soma = 0
	const cpfSemDigitos = cpf.substr(0, multiplicador -1).split('')
	const digitoVerificador = cpf.charAt(multiplicador -1)
	for(let contador =0; multiplicadorInicial > 1; multiplicadorInicial-- ) {
		soma = soma + cpfSemDigitos[contador] * multiplicadorInicial
		contador++;
	}

	if(digitoVerificador == confirmaDigito(soma)) {
		return checaDigitoVerificador(cpf, multiplicador +1)
	}
	return false
}

function confirmaDigito(soma) {
	return 11 - (soma % 11)
}


function recuperarCEP(input) {
	const cep = input.value.replace(/\D/g, '')
	const url = `https://viacep.com.br/ws/${cep}/json/`
	const options = {
		method: 'GET',
		mode: 'cors',
		headers: {
			'content-type': 'application/json;charset=utf-8'
		}
	}

	if (!input.validity.patternMismatch && !input.validity.valueMissing) {
		fetch(url,options).then(
			response => response.json()
		).then(
			data => {
				if(data.erro) {
					input.setCustomValidity('O CEP não é válido')
					return
				}
				input.setCustomValidity('')
				preencheCamposComCEP(data)
				return
			}
		)
	}
}

function preencheCamposComCEP(data){
	const endereco = document.querySelector('[data-tipo="endereco"]')
	const bairro =  document.querySelector('[data-tipo="bairro"]')
	const cidade =  document.querySelector('[data-tipo="cidade"]')
	const estado =  document.querySelector('[data-tipo="estado"]')

	endereco.value = data.logradouro
	bairro.value = data.bairro
	cidade.value = data.localidade
	estado.value = data.uf
}

var password = document.getElementById("senha1")
  , confirmeSenha = document.getElementById("confirmeSenha");

function validaSenha(){
  if(senha1.value != confirmeSenha.value) {
    confirmeSenha.setCustomValidity("As senhas escolhidas não são iguais !");
  } else {
    confirmeSenha.setCustomValidity('');
  }
}

password.onchange = validaSenha;
confirmeSenha.onkeyup = validaSenha;


