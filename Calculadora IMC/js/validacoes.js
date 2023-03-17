function validaPaciente(informacoes) {

    erros = document.querySelector("#erros")

    if (informacoes.nome.length == 0 
        || informacoes.peso.length == 0
        || informacoes.altura.length == 0) {
        erros.textContent = "Preencha todos os campos em branco."
    } else if (informacoes.peso < 1 || informacoes.peso >= 700) {
        erros.textContent = "Informe um peso válido."
    } else if (informacoes.altura < 1 || informacoes.altura >= 3.0) {
        erros.textContent = "Informe uma altura válida."
    } else {
        adicionaPessoaNaTabela(informacoes)
    }
    return erros
}

function mensagensErro(erros) {
    var h3 = document.querySelector("#erros")
    h3.textContent = erros
}