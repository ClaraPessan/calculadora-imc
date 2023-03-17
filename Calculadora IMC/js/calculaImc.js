function calculaImc(peso, altura) {
    imc = 0;
    var calculo = peso / (altura * altura)

    return calculo.toFixed(2);
}