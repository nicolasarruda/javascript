const item1 = document.querySelector("li");
console.log(item1);
console.log(item1.innerHTML)
console.log(item1.outerHTML);

const items = document.querySelectorAll("li");
console.log(items);

const card1 = document.querySelector(".card");
console.log(card1);

const paragrafo = document.createElement("p");
paragrafo.innerHTML = "Descrição";

card1.appendChild(paragrafo);
card1.classList.add("super-border");

const cards = document.querySelectorAll(".card");
//const cards = document.getElementsByClassName("card");
console.log(cards);

Array.from(cards).map(item => {
    console.log(item);
});

Array.from(cards).map(item => {
    console.log(item.innerHTML);
});

[...cards].map(item => {
    console.log(item);
});

[...cards].map(item => {
    console.log(item.innerHTML);
});

// seleção de elementos - Dataset 

//seletor class, id, dataset... 

// dataset sao atributos adicionais que se pode por no elemento
// e que nao vao influenciar em nada no comportamento da página
// e que facilita a comunicação com o javascript

// Dataset será um objeto que você definiu como atributos no tag html, usando o prefixo "data-"

const card1_1 = document.querySelector('[data-product-id="32"]');

console.log(card1_1);
