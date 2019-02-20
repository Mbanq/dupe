const location = require('../../src/location/index.js')
global.Math.random = () => 0.5

test('show a country', () => {
  expect(location.country()).toBeTruthy()
})

test('show a city', () => {
  expect(location.city()).toBeTruthy()
})
