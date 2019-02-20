const rand = require('../src/util.js')

test('it should random array', () => {
  global.Math.random = () => 0.5 // Math.random will always return 0.5
  const array = ['666', '2', '123', '69']
  //  array.length = 4
  //  math.floor(0.5*4) = [2]
  expect(rand(array)).toEqual('123')
})
