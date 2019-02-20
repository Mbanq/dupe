'use strict'

const text = require('./text/index.js')
const name = require('./name/index.js')
const location = require('./location/index.js')
const finance = require('./finance/index.js')

const mbanq = {
  finance,
  location,
  name,
  text
}

module.exports = mbanq
