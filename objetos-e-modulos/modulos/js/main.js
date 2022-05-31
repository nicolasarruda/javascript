/*import * as nb from './numbers.js';

console.log(nb.sum(3, 4));
console.log(nb.round(3.2345, 4));


import { sum, round } from './numbers.js';
import Product from './product.js';

console.log(sum(3, 4));
console.log(round(3.2345, 4));

const obj = new Product("Computador", 800.0, 10);

console.log(obj);
*/

// nome nao padrao da classe Product, por exemplo Prod
import { sum, round } from './numbers.js';
import Prod from './product.js';

console.log(sum(3, 4));
console.log(round(3.2345, 4));

const obj = new Prod("Computador", 800.0, 10);

console.log(obj);

// Uma boa pratica é manter o nome padrão, por exemplo, Product