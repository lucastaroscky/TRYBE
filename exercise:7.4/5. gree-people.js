const assert = require('assert');

const greetPeople = (people) => {
 let greeting = [];

 for (const person in people) {
   greeting.push(`Hello ${people[person]}`);
 }
 return greeting;
};

assert.strictEqual(typeof greetPeople, 'function') // teste se é uma função passou sem erros

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const output = greetPeople(parameter)
assert.deepStrictEqual(output, result)
