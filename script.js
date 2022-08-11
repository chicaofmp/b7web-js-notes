//Aula 1 a Aula 3 - Métodos de String
//Resumo: 
//Aula 1: string.length() ; string.indexOf('FMP') 
//Aula 2: string.slice(6,12) ; string.substring(0,7) ; string.substr(10, 18)
//Aula 3: string.replace('FMP', 'abc') ; string.toUpperCase() ; string.toLowerCase() ; string.concat() ; string.charAt()
//Mais Iportante: string.split(array) ----> Transforma String em Array!

//Aula 1

let nome = "Francisco Moura Pinto";

let resultadoNomeLength = nome.length;
console.log(resultadoNomeLength);


let resultadoStringIndex = nome.indexOf('P');
console.log(resultadoStringIndex);

if(nome.indexOf('z') > -1) {
    
    console.log('Achou');
} else {
    console.log('Não Achou');
}

//Aula 2
let nomeFilha = "Liana Morais Moura";
let resultadoMoraisSlice = nomeFilha.slice(6,12);     //.slice(inicio, fim)
let resultadoMoraisSlice2 = nomeFilha.slice(-15,-10); //Funciona com Negativos, o .Substring não.

console.log(nomeFilha.indexOf('Morais'));
console.log(nomeFilha.indexOf('s '));
console.log(resultadoMoraisSlice);
console.log(resultadoMoraisSlice2);

let resultadoMoraisSlice3 = nomeFilha.substring(0,7);
console.log(resultadoMoraisSlice3);

let resultadoMoraisSlice4 = nomeFilha.substr(10, 18); //Substr (início, Quantidade de caracteres) e Funciona com Negativos. [Mais USADO!]
console.log(resultadoMoraisSlice4);
let resultadoMoraisSlice5 = nomeFilha.substr(-12, nomeFilha.length);
console.log(resultadoMoraisSlice5);

//Aula 3
let nomeApelido = "Chicão FMP";

let substituirParte = nomeApelido.replace('FMP', 'Francisco Moura Pinto (FMP)')
console.log(nomeApelido);
console.log(substituirParte);

let stringExemplo = "Eu gosto de carros";
let substituirPalavra = stringExemplo.replace('carros', 'Motos'); //Não modifica a variável e sim cria outra variável.
console.log(stringExemplo)
console.log(substituirPalavra)

let letrasCapsExemplo = stringExemplo.toUpperCase();
console.log(letrasCapsExemplo)
let letrasMinExemplo = stringExemplo.toLowerCase();
console.log(letrasMinExemplo)

let concatenarResultados = letrasCapsExemplo.concat(letrasMinExemplo);
console.log(concatenarResultados)

let nomeApelidoWhatisThere = nomeApelido.charAt(4) //Encontra o que está na 4 posição (index 4)
console.log(nomeApelidoWhatisThere)

console.log(nomeApelido[4])

//Transforma String em Array

let nomeTransformarArray = nome.split('');
console.log(nomeTransformarArray)

let nomeTransformarArray2 = nome.split(' ');
console.log(nomeTransformarArray2)

let numbersArr = "123456789";
let numbersArrTransformarArray = numbersArr.split('')
console.log(numbersArrTransformarArray);

let numbersArr2 = "1,2,3,4,5,6,7,8,9,10,11"
let numbersArrTransformarArray2 = numbersArr2.split(',');
console.log(numbersArrTransformarArray2);

//
//Aula 4 - Métodos de Numbers
//Resumo: number.toString() ; number.toFixed(2) ; parseInt(number) ; parseFloat(number)
let numero = 10;

let res = numero;
console.log(numero);
console.log(typeof(res))

let resString = numero.toString();
console.log(resString)
console.log(typeof(resString))

let res2 = numero + 5;
console.log(res2);

let res3 = numero.toString() + 5;
console.log(res3)

let numeroGrande = 13.321321313123
let res4NumeroGrande = numeroGrande.toFixed(2)  //Diminuir CASAS DECIMAIS
console.log(res4NumeroGrande)

let numeroString = "155.789";
let resNumeroString = numeroString + 100;
console.log(resNumeroString);

let resNumeroStringToNumero = parseInt(numeroString) + 100;  //parseINT -----> TRANSFORMAR A STRING EM NÚMERO INTEIRO
console.log(resNumeroStringToNumero)

let resNumeroStringToNumeroFloat = parseFloat(numeroString) + 100; 
console.log(resNumeroStringToNumeroFloat)


//Aula 5 a Aula 8 - Métodos de Arrays
