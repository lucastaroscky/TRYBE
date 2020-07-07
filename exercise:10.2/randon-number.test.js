const random = require('./random-number.js');

// exercício 1 - número aleatório de 1 a 100
test('teste para verificar se função foi chamada, se a saída está correta e quantas vezes foi chamada', () => {
   random.randomNumber = jest
    .fn()
    .mockReturnValue(4);
    random.randomNumber()
  expect(random.randomNumber).toHaveBeenCalled();
  expect(random.randomNumber()).toBe(4)
  expect(random.randomNumber).toHaveBeenCalledTimes(2)
})
