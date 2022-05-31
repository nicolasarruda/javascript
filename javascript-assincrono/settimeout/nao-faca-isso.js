// ESPERA SÍNCRONA: NÃO SE DEVE FAZER

function esperar(ms) {
    const end = Date.now() + ms;

    while(Date.now() < end){
    }
}

console.log("A");
esperar(5000);
console.log("B");