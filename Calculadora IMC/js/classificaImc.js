function verificaClassificacao(imc) {
    if (imc < 18.5) {
        return "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9) {
        return "Obesidade";
    } else {
        return "Obesidade grave";
    }
}
