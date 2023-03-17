var botaoAdicionar = document.querySelector("#botao-concluir")

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var formulario = document.querySelector("#adiciona-form")
    var informacoes = capturaInformacoesDoFormulario(formulario)

    var erros = validaPaciente(informacoes)
    if (erros.length == 0) {
        adicionaPessoaNaTabela(informacoes)
        formulario.reset()
    }
})

function capturaInformacoesDoFormulario(formulario) {
    var informacoes = {
        nome: formulario.nome.value,
        altura: formulario.altura.value,
        peso: formulario.peso.value,
        classificacao: verificaClassificacao(formulario.imc),
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return informacoes;
}