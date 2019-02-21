'use strict'

const name = require('../../src/name/index.js')
const first = require('../../src/name/first.js')
const last = require('../../src/name/last.js')
global.Math.random = () => 0.5

test('returns a random first name from the list', () => {
  expect(first).toContain(name.first())
})

test('return a random last name from the list', () => {
  expect(last).toContain(name.last())
})

test('return full name from the list', () => {
  expect(name.full()).toEqual(name.first() + ', ' + name.last())
})

test('return an email format', () => {
  expect(name.email()).toMatch(/@+./)
})
