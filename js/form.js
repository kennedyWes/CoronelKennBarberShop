var botaoAdicionar = document.querySelector(".formulario-cadastro-novo");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector(".formulario-cadastro-novo");

    var cliente = obtemClienteDoFormulario(form);

    var clienteForm = montaForm(cliente);

    var erros = validaCliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    var cadastro = document.querySelector(".formulario-novo");

    cadastro.appendChild(cliente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoFormulario(form) {

    var cliente = {
        nome: form.nomecompleto.value,
        cpf: form.cpf.value,
        nascimento: form.nascimento.value,
        cep: form.cep.value,
        endereco: form.endereco.value,
        complemento: form.complemento.value,
        bairro: form.bairro.value,
        cidade: form.cidade.value,
        estado: form.estado.value,
        telefone: form.telefone.value,
        email1: form.email1.value,
        senha1: form.senha1.value,
        confimeSenha: form.confirmeSenha.value,
    }

    return cliente;
}

function montaForm(cliente) {
    var clienteForm = document.createElement("form");
    clienteForm.classList.add(".formulario-cadastro-novo");

    clienteForm.appendChild(montaForm(cliente.nomecompleto, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.cpf, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.nascimento, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.cep, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.endereco, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.complemento, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.bairro, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.cidade, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.estado, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.telefone, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.email1, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.senha1, "campo-formulario"));
    clienteForm.appendChild(montaForm(cliente.confirmeSenha, "campo-formulario"));

    return pacienteTr;
}

function montaForm(dado, classe) {
    var imput = document.createElement("imput");
    td.classList.add(classe);
    td.textContent = dado;

    return imput;
}

function validaCliente(cliente) {

    var erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.cpf.length == 0) {
        erros.push("O Cpf não pode ser em branco");
    }

    if (cliente.nascimento.length == 0) {
        erros.push("A data de nascimento não pode ser em branco");
    }

    if (cliente.cep.length == 0) {
        erros.push("O Cep não pode ser em branco");
    }

    if (cliente.endereco.length == 0) {
        erros.push("O endereco não pode ser em branco");
    }

    if (cliente.bairro.length == 0) {
        erros.push("O Bairro não pode ser em branco");
    }

    if (cliente.cidade.length == 0) {
        erros.push("A Cidade de nascimento não pode ser em branco");
    }

    if (cliente.estado.length == 0) {
        erros.push("O Estado não pode ser em branco");
    }

    if (cliente.telefone.length == 0) {
        erros.push("O Telefone não pode ser em branco");
    }

    if (cliente.email1.length == 0) {
        erros.push("O email não pode ser em branco");
    }

    if (cliente.senha1.length == 0) {
        erros.push("A senha de nascimento não pode ser em branco");
    }

    if (cliente.confimeSenha.length == 0) {
        erros.push("É obrigatório confirmar a senha");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
