const rand = require('../src/util.js')

test('it should random array', () => {
  global.Math.random = () => 0.5
  const array = ['666', '2', '123', '69']
  expect(rand(array)).toEqual('123')
})
