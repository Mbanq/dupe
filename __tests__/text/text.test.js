'use strict'

const text = require('../../src/text/index.js')
global.Math.random = () => 0.5

test('return number of string with provided argument', () => {
  let countSpace =
    text.sentence(3).length -
    text
      .sentence(3)
      .split(' ')
      .join('').length

  expect(countSpace).toEqual(3)
})

test('return number of string without provided argument', () => {
  let countSpace =
    text.sentence().length -
    text
      .sentence()
      .split(' ')
      .join('').length
  expect(countSpace).toEqual(5)
})
