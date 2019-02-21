'use strict'

const rand = require('../util.js')
const countries = require('./countries.js')
const cities = require('./cities.js')
const location = {
  country: () => {
    return rand(countries)
  },
  city: () => {
    return rand(cities)
  }
}

module.exports = location
