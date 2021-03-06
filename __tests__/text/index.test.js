'use strict'

const text = require('../../src/text/index.js')

test('finance exports following functions', () => {
  [ 'sentence' ].forEach(key => {
    expect(text).toHaveProperty(key)
    expect(typeof text[key]).toBe('function')
  })
})

test('returns a string with provided number of words', () => {
  const wordsArray = text.sentence(3).split(' ')
  expect(wordsArray).toHaveLength(3)
})

test('returns a string with default number of words', () => {
  const wordsArray = text.sentence().split(' ')
  expect(wordsArray).toHaveLength(5)
})
