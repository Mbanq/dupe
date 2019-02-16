'use strict'

const mbanq = require('../src/index.js')

test(`calling mbanq without params`, () => {
  expect(mbanq()).toEqual(`Hello from Mbanq`)
})

test(`calling mbanq without params`, () => {
  expect(mbanq(`Hail Satan`)).toEqual(`Hail Satan`)
})
