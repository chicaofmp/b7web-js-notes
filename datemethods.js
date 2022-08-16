let d = new Date(); //Data Atual segundo seu sistema
console.log(d)
console.log(d.toDateString())
console.log(d.toUTCString())
console.log(d.toString())

let d1 = new Date(2022, 07, 16, 13, 14, 15 ); //Data estipulada
console.log(d1);
console.log(d1.toString());

let d2 = new Date('2025-02-02 15:16:17');
console.log(d2)

let dateOrigin = new Date(0);
console.log(dateOrigin)

let dateOrigin2 = new Date(0);
console.log(dateOrigin.toUTCString())

let d3 = new Date();

let novoValorAno = d3.getFullYear()
console.log(novoValorAno)

let novoValorMes = d3.getMonth()
console.log(novoValorMes)

let novoValorDia = d3.getDay() //Pega o dia da semana (Hoje é terça feira ---> 0, 1, 2 (terça))
console.log(novoValorDia)

let novoValorDiaAtual = d3.getDate();
console.log(novoValorDiaAtual)

let novoValorHoras = d3.getHours();
console.log(novoValorHoras)

let novoValorMinutos = d3.getMinutes();
console.log(novoValorMinutos)

console.log(d3)
d3.setDate( d3.getDate() + 10)
console.log(d3)