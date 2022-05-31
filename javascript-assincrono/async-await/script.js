/*
const cep = '01001000';
// Fetch significa buscar
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

//`https://viacep.com.br/ws/${cep}/json/`

fetchResult
    .then(response => {
        console.log("SUCESSO NO FETCH", response);
        const json = response.json();
        json
            .then(result => {
                console.log("SUCESSO NO JSON", result);
            })
            .catch(error => {
                console.log("ERRO NO JSON", error);
            });
        
    })
    .catch(error => {
        console.log("ERRO NO FETCH", error);
    })

console.log("A");
console.log("B");
*/
const cep = '01001000';
const fetchResult = fetch(`https://viacep.com.br/ws/${cep}/json/`);

async function getJsonResponse(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}
// console.log é uma função síncrona.. por isso ela nem espera a resposta 
// da função assíncrona (getJsonResponse)

console.log("A");
console.log("B");
//console.log(getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)); // aqui fica como Pending

// Como resolver?

// Primeira forma: com o then

getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
        console.log(result);
    });

// Segunda forma: criar uma outra funcao assíncrona

async function showCepData(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json = await getJsonResponse(url);
    console.log(json);
}

showCepData(cep);

// o "await" só funciona se tiver "async" na função