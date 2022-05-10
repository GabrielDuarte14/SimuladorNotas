var selectAC = 0;

function apareceAcs() {
    var quais = acs.value;

    if (quais == 'AC1') {
        campoac1.style.display = 'block'
        campoac2.style.display = 'none'
        campoac3.style.display = 'none'
        selectAC = 1;
    } else if (quais == 'AC2') {
        campoac1.style.display = 'block'
        campoac2.style.display = 'block'
        campoac3.style.display = 'none'
        selectAC = 2;
    } else if (quais == 'AC3') {
        campoac1.style.display = 'block'
        campoac2.style.display = 'block'
        campoac3.style.display = 'block'
        selectAC = 3;
    } else {
        campoac1.style.display = 'none'
        campoac2.style.display = 'none'
        campoac3.style.display = 'none'
        resposta.style.display = 'none'
        selectAC = 0;
    }
}

function calcular() {
    var notaac1 = Number(ac1.value);
    var notaac2 = Number(ac2.value);
    var notaac3 = Number(ac3.value);

    console.log(selectAC)
    if (selectAC == 1) {
        if (notaac1 > 10 || notaac1 < 0 || notaac1 == null) {
           resposta.innerHTML = '<b style="color:red">Nota inválida</b>'
        } else {
            var total = 18 - notaac1;
            resposta.innerHTML = `Você deve tirar pelo menos ${(total/2).toFixed(2)} nas próximas ACS. A soma da AC2+AC3 deve ser maior ou igual a ${total}`
        }
    } else if (selectAC == 2) {
        if (notaac1 > 10 || notaac1 < 0 || notaac2 > 10 || notaac2 < 0 || notaac1 == null || notaac2 == null) {
           resposta.innerHTML = '<b style="color:red">Nota inválida</b>'
        } else {
            var total = 18 - notaac1 - notaac2;

            if (total > 0 && total <= 10) resposta.innerHTML = `Para que você passe de semestre, a nota da AC3 deve ser maior ou igual a ${total}`
            else if (total < 0) resposta.innerHTML = `Você já alcançou a média das AC's, sem preocupação com a AC3, agora presta atenção na Sprint!!`
            else resposta.innerHTML = `Infelizmente você precisa tirar mais que 10 para alcançar a média das ACs`
        }
    } else if (selectAC == 3) {
        if (notaac1 > 10 || notaac1 < 0 || notaac2 > 10 || notaac2 < 0 || notaac3 > 10 || notaac3 < 0 || notaac1 == null || notaac2 == null || notaac3 == null) {
           resposta.innerHTML = '<b style="color:red">Nota inválida</b>'
        } else {
            var total = 18 - notaac1 - notaac2 - notaac3;
            var media = (notaac1+notaac2+notaac3)/3;
            var mediaSprint =0;
            for (var i = 0; i <= 10; i=i+0.1) {
                if((i*0.6) + (media*0.4) >=6 ){
                    console.log(i + ' no if')
                    mediaSprint = i;
                    break;
                }else{
                    console.log(i + ' no else')
                }
            }
            if (total > 0) resposta.innerHTML = `Infelizmente você não alcançou a média das AC's. A média é 6 e você ficou com ${((notaac1+notaac2+notaac3)/3).toFixed(2)}`
            else resposta.innerHTML = `Você já alcançou a média das AC's! Para passar de semestre sua média de sprint deverá ser de pelo menos ${(mediaSprint*1.40).toFixed(2)}`
        }
    }


}