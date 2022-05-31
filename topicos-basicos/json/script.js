/*
const obj1 = {
    "nome": "Computador",
    "preco": 50.9,
    "due-date": "2025-04-15"
}

const obj2 = {
    nome: "Computador",
    preco: 50.9,
    "due-date": "2025-04-15"
}

const obj3 = {
    id: 53,
    date: "2021-10-20",
    items: [
        {
            description: "Celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "Mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client: {
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
};

console.log(obj1);
console.log(obj2);
console.log(obj3);

console.log(obj3.date);
console.log(obj3.client);
console.log(obj3.client.name);
*/
const txt = `{"name": "Computador", "price": 50.9, "due-date": "2025-04-15"}`;

// Convert to object
const obj = JSON.parse(txt);

// Convert to string
const text = JSON.stringify(obj);