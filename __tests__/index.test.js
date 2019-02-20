'use strict'

const mbanq = require('../src/index.js')

test('call mbanq property', () => {
  expect(mbanq.text.sentence()).toBeTruthy()
})
