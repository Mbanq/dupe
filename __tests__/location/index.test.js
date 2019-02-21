'use strict'

const location = require('../../src/location/index.js')
const countries = require('../../src/location/countries.js')
const cities = require('../../src/location/cities.js')

test('returns a random country from the list', () => {
  expect(countries).toContain(location.country())
})

test('returns a random city from the list', () => {
  expect(cities).toContain(location.city())
})
