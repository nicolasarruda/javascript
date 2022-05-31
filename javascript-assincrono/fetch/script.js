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