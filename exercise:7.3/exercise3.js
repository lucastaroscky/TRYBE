const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// 1 - Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
assert.deepStrictEqual(mySum([1, 2, 3, 4]), 10)
// 2 - Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
assert.strictEqual(mySum([1, -2, -3, 4]), 0)