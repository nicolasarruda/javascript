function f(g, h){

setTimeout(() => {
    if(10 < 0){
        g("P");
    }
    else {
        h("Q");
    }   
}, 3000);

}

function executarSeResolver(valor){
    console.log("Resolveu com o valor " + valor);
}

function executarSeRejeitar(valor){
    console.log("Rejeitada com o valor " + valor);
}

const minhaPromise = new Promise(f);

minhaPromise.then(executarSeResolver);


/*
// Mais comum de se ver
minhaPromise.then(valor => {
    console.log("Resolveu com o valor " + valor);
});

minhaPromise.catch(executarSeRejeitar);

// Mais comum de se ver
minhaPromise.catch(valor => {
    console.log("Rejeitada com o valor " + valor);
});

*/

// Encadeando then com catch -> evita Uncaught Q

minhaPromise.then(valor => {
    console.log("Resolveu com o valor " + valor);
})
.catch(valor => {
    console.log("Rejeitada com o valor " + valor);
});

console.log(minhaPromise);