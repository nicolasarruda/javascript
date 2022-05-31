/*export function sum(num1, num2) {
    return num1 + num2;
}

function exp(base, exponent){
    return base ** exponent;
}

export function round(value, precision) {
    let multplier = exp(10, precision || 0);
    return Math.round(value * multplier) / multplier;
}
*/

function sum(num1, num2) {
    return num1 + num2;
}

function exp(base, exponent){
    return base ** exponent;
}

function round(value, precision) {
    let multplier = exp(10, precision || 0);
    return Math.round(value * multplier) / multplier;
}

export { sum, round };