const name = require('../../src/name/index.js')
global.Math.random = () => 0.5

test('show full name when point to full name', () => {
  expect(name.full()).toEqual(name.first() + ', ' + name.last())
})

test('show show an email format', () => {
  expect(name.email()).toMatch(/@/)
})
