const text = require('../../src/text/index.js')
global.Math.random = () => 0.5
test('show some random texts', () => {
  let countSpace =
    text.sentence(3).length -
    text
      .sentence(3)
      .split(' ')
      .join('').length

  expect(countSpace).toEqual(3)
})

test('show some random texts with default arg', () => {
  let countSpace =
    text.sentence().length -
    text
      .sentence()
      .split(' ')
      .join('').length
  expect(countSpace).toEqual(5)
})
