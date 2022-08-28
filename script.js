function irPara2x2() {
    window.location = "matriz2x2.html";
}

function irPara3x3() {
    window.location = "matriz3x3.html";
}

function voltar() {
    window.location = "index.html";
}

function resultado2x2(){
    var input1 = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    var input3 = parseInt(document.getElementById('3').value);
    var input4 = parseInt(document.getElementById('4').value);
    var determinante = input1*input4-(input2*input3);
    if (input1 && input2 && input3 && input4){
        alert ("O resultado foi: " + determinante);  
    } else {
        alert ("Um espaço está em branco!");
    }
}

function resultado3x3() {
    var input1 = parseInt(document.getElementById('1').value);
    var input2 = parseInt(document.getElementById('2').value);
    var input3 = parseInt(document.getElementById('3').value);
    var input4 = parseInt(document.getElementById('4').value);
    var input5 = parseInt(document.getElementById('5').value);
    var input6 = parseInt(document.getElementById('6').value);
    var input7 = parseInt(document.getElementById('7').value);
    var input8 = parseInt(document.getElementById('8').value);
    var input9 = parseInt(document.getElementById('9').value);
    var determinante = ((input1*input5*input9+(input2*input6*input7+(input3*input4*input8))-((input7*input5*input3+(input8*input6*input1+(input9*input4*input2))))));
    if (input1 && input2 && input3 && input4 && input5 && input6 && input7 && input8 && input9){
        alert ("O resultado foi: " + determinante);  
    } else {
        alert ("Um espaço está em branco!");
    }
}