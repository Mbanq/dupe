'use strict'

const name = require('../../src/name/index.js')
const firstNames = require('../../src/name/first.js')
const lastNames = require('../../src/name/last.js')

test('returns a random first name from the list', () => {
  expect(firstNames).toContain(name.first())
})

test('return a random last name from the list', () => {
  expect(lastNames).toContain(name.last())
})

test('return full name from the list', () => {
  const [ first, last ] = name.full().split(', ')
  expect(firstNames).toContain(first)
  expect(lastNames).toContain(last)
})

test('return a random email address', () => {
  const [ first, domain ] = name.email().split('@')
  const [ last ] = domain.split('.')
  expect(firstNames.map(n => n.toLowerCase())).toContain(first)
  expect(lastNames.map(n => n.toLowerCase())).toContain(last)
  expect(name.email()).toMatch(/@+./)
})
