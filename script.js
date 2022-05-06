var selectAC = 0;
function apareceAcs(){
    var quais = acs.value;

    if(quais == 'AC1'){
        campoac1.style.display = 'block'
        campoac2.style.display = 'none'
        campoac3.style.display = 'none'
        selectAC = 1;
    }else if(quais == 'AC2'){
        campoac1.style.display = 'block'
        campoac2.style.display = 'block'
        campoac3.style.display = 'none'
        selectAC = 2;
    }else if(quais == 'AC3'){
        campoac1.style.display = 'block'
        campoac2.style.display = 'block'
        campoac3.style.display = 'block'
        selectAC = 3;
    }
}

function calcular(){
    var notaac1 = Number(ac1.value);
    var notaac2 = Number(ac2.value);
    var notaac3 = Number(ac3.value);
    console.log(selectAC)
    if(selectAC == 1){
        var total = 18 - notaac1;
        resposta.innerHTML = `Você deve tirar pelo menos ${(total/2).toFixed(2)} nas próximas ACS. A soma da AC2+AC3 deve ser maior ou igual a ${total}`
    }
    else if(selectAC == 2){
        var total = 18 - notaac1 - notaac2;
     
        if(total>0 && total<=10) resposta.innerHTML = `Para que você passe de semestre, a nota da AC3 deve ser maior ou igual a ${total}`
        else if(total<0) resposta.innerHTML = `Você já alcançou a média das AC's, sem preocupação com a AC3, agora presta atenção na Sprint!!`
        else resposta.innerHTML = `Infelizmente você precisa tirar mais que 10 para alcançar a média das ACs`
 
    }
   else if(selectAC == 3){
        var total = 18 - notaac1 - notaac2 - notaac3;
        if(total>0) resposta.innerHTML = `Infelizmente você não alcançou a média das AC's. A média é 6 e você ficou com ${((notaac1+notaac2+notaac3)/3).toFixed(2)}`
        else resposta.innerHTML = `Você já alcançou a média das AC's, agora presta atenção na Sprint!!`
        
    }


}