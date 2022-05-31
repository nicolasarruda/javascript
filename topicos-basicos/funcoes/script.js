function sum1(num1, num2){
    return num1 + num2;
}

const sum2 = function(num1, num2) {
    return num1 + num2;
}

const sum3 = (num1, num2) => {
    return num1 + num2;
}

const sum4 = (num1, num2) => num1 + num2;

const doble1 = function(num) {
    return num * 2;
}

const doble2 = num => num * 2;

// Funcao que nao tem um retorno definido, por padrão ela retorna undefined

function showPrice(price){
    console.log("PRECO = " + price);
}

// Variaveis definidas dentro do escopo da função não vazam escopo

// no caso do 'var' vaza o escopo de estrutura de controle - For, while, if, else if, etc. MAS
// NAO VAZAM NO ESCOPO DE FUNÇÃO

function circleArea(radio){
    var pi = 3.14;
    return pi * radio * radio;
}

// Function hoisting: funções no JS são "movidas" para cima pelo motor do JS

test(10);
function test(x){
    console.log("TESTE = " + x);
}

// test(10);


// FUNÇÕES DE ALTA ORDEM
// Funcoes podem ser passadas como argumento. Uma função pode ser retorno de outra função

function threeTimes(num) {
    return num * 3;
}

function apply(f, num) {
    const result = f(num);
    console.log("RESULTADO = " + result);
}

apply(threeTimes, 10);
apply(doble1, 10);