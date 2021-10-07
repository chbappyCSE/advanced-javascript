// Square Root Example

const numbers = [3, 4, 5, 6, 7, 8, 9, 10];
// Normal Way
/* const output = [];

for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
} */

/* function square (element){
    return element * element;
}
const square = element => element * element;

const result = numbers.map(function(element /*, index, array*/ /*){
    // console.log(element, index, array);
    return element * element;
}) */
const mapItem = numbers.map(x => x*x);

const filterItem = numbers.filter(x => x > 5);
const findItem = numbers.find(x => x > 5);

console.log(mapItem);
console.log(filterItem);
console.log(findItem);

// console.log(output);