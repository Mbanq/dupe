'use strict'

const rand = require('../src/util.js')

test('it should random array', () => {
  const array = ['666', '2', '123', '69']
  expect(array).toContain(rand(array))
})
