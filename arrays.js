//Métodos de Arrays

let lista = ['Ovo', 'faritnha', 'maio', 'cca'];
console.log(lista);

let listaString = lista.toString()  //Transforma array em string [é um Join. SEPARADO por vírgula]
console.log(listaString);

let listaSeparar = lista.join('///'); // Transforma em array e separa de acordo com o parametro indicado
console.log(listaSeparar);

let listaMaioPosition = lista.indexOf('maio');
console.log(listaMaioPosition);

lista.pop();    //Remove o ÚLTIMO dado do array
console.log(lista);

lista.shift();
console.log(lista); //Remove o PRIMEIRO dado do array

lista.push('Picanha'); //Add no FIM do array 
console.log(lista);

lista.unshift('Sorvete')    //Add no COMEÇO do array
console.log(lista);

lista[1] = 'Sorvete de Abacaxi'; // Modifica o item no index[1]
console.log(lista);

delete lista[1];   //Deleta o index[1], mas deixa EMPTY esse index. ['Sorvete', empty, 'maio', 'Picanha']
console.log(lista);

lista.splice(1, 1); //Remover a partir do index[1], apenas 1 item;
console.log(lista);

lista.splice(1); //Remove tudo a partir do item[1]
console.log(lista); 

let lista2 = ['A', 'B', 'C', 'D'];
let lista3 = [0, 100, 10, 15, 45, 2, 5, 3, 11, 22];
let lista4 = ['Ferrari', 0, 'Audi', 'VW', 'Mercedes', 'BMW', 'Ford', 'GM', 'Fiat', 'Land Rover', 'Porsche', 'Renault', 'Peugeot', 'Honda', 'Mitsubishi', 'Toyota', 'Hyundai', 'Kia', 'Chery'],


lista2Cut = lista2.splice(1, 2); //Remove 2 items a partir do 1 (index 1 e 2)
console.log(lista2Cut);

let juntarListas = lista.concat(lista2).concat(lista3); //Junta os 2 arrays
console.log(juntarListas);

let lista4OrdemAlfabetica = lista4.sort(); //Ordena em Ordem Alfabética (se nao usar parametros)
console.log(lista4OrdemAlfabetica);

let lista4Reverse = lista4.reverse(); //Reverte a ordem que está, se quiser Ordem Alfabetica REVERSA precisa fazer o sort() e depois o Revert()
console.log(lista4Reverse)

let lista4OrdemReversa = lista4OrdemAlfabetica.reverse();
console.log(lista4OrdemReversa)
lista4OrdemReversa = lista4OrdemAlfabetica.reverse();
console.log(lista4OrdemReversa)

let lista3x2 = lista3.map(function(item) { //O Map vai em cada INDEX e faz a função.
    return item * 2;
});
console.log(lista3x2);

let lista3Map = lista3.map(function(item) {
    return item /2
})
console.log(lista3Map)
//Métodos mais Avançados de manipulação de arrays

let listaNova = [];

for (let i in lista3Map) {
    listaNova.push(lista3Map[i] * 10);
}
console.log(listaNova);

let listaNova2 = [];

listaNova2 = listaNova.filter(function(item) {
    if(item > 15) {
        return true;
    } else {
        return false;
    }
});

console.log(listaNova2);

let listaNova3 = listaNova.filter(function(item) {
    if(item <= 15) {
        return true;
    } else {
        return false;
    }
});
console.log(listaNova3);

let lista3Every  //Se todos os Items do ARRAY estao na condição === TRUE, caso 1 nao esteja === false
lista3Every = listaNova.every(function(item) {
    if(item > 4) {
        return true;
    } else {
        return false;
    }
});
console.log(lista3Every)

let lista3Some //Se apenas 1 bater a condição desejada === TRUE
lista3Some = listaNova.some(function(item) {
    if(item > 4) {
        return true;
    } else {
        return false;
    }
});
console.log(lista3Some);

let lista5 = [25, 15, 13, 1, 2, 4, 100, 5, 55];
let lista5Altered = [];
let lista5IndexAltered = [];

lista5Altered = lista5.find(function(item) {        //Retorna o primeiro ítem que entra na condição.
    if(item > 10) {
        return true;
    } else {
        return false;
    }
})

lista5IndexAltered = lista5.findIndex(function(item) {      //Encontra o INDEX do primeiro item da condição.
    return (item > 50) ? true : false;
});

console.log(lista5IndexAltered);

let arrayObjetos = [
    {id:1, nome: 'Chico', sobrenome: 'MP'},
    {id:2, nome: 'Francisco', sobrenome: 'Moura Pinto'},
    {id:3, nome: 'Chacal', sobrenome: 'Kobe'}
]

let arrayObjetosPessoaCondicao = arrayObjetos.find(function(item) {
    return (item.id === 2 ? true : false );
})
console.log(arrayObjetosPessoaCondicao)

let arrayObjetosPessoaCondicao2 = arrayObjetos.find(function(item) {
    return (item.nome === 'Chacal' ? true : false);
})
console.log(arrayObjetosPessoaCondicao2)

let arrayObjetosIndex1 = arrayObjetos.findIndex(function(item) {
    return (item.sobrenome === 'Kobe' ? true : false)
})
console.log(arrayObjetosIndex1)

