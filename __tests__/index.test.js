'use strict'

const mbanq = require('../src/index.js')

test('call mbanq property', () => {
  [ 'finance',
    'location',
    'name',
    'text' ].forEach(key => {
    expect(mbanq).toHaveProperty(key)
    expect(typeof mbanq[key]).toBe('object')
  })
})
