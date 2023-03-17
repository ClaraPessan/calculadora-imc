function adicionaPessoaNaTabela(informacoes) {
    var novaTr = addNovaTr(informacoes);
    var tabela = document.querySelector("#tabela-pessoas");
    tabela.appendChild(novaTr);
}

function addNovaTr(informacoes) {
    var novaTr = document.createElement("tr");
    novaTr.classList.add("informacoes")

    novaTr.appendChild(addNovaTd(informacoes.nome, "info-nome"));
    novaTr.appendChild(addNovaTd(informacoes.altura, "info-altura"));
    novaTr.appendChild(addNovaTd(informacoes.peso, "info-peso"));
    novaTr.appendChild(addNovaTd(verificaClassificacao(informacoes.imc), "info-classificacao"));
    novaTr.appendChild(addNovaTd(informacoes.imc, "info-imc"))
    
    return novaTr;
}

function addNovaTd(valor, classe) {
    var novaTd = document.createElement("td")
    novaTd.textContent = valor
    novaTd.classList.add(classe)
    return novaTd;
}