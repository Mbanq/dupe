'use strict'

const finance = require('../../src/finance/index.js')

test('finance exports following functions', () => {
  [ 'amount',
    'transactionType',
    'accountType',
    'accountNumber',
    'randomInt',
    'cardNumber' ].forEach(key => {
    expect(finance).toHaveProperty(key)
    expect(typeof finance[key]).toBe('function')
  })
})

test('returns a random amount with certain precision', () => {
  expect(finance.amount()).not.toBeNaN()
  expect(finance.amount()).toBeLessThanOrEqual(999999)
})

test('returns a random amount with provided precision', () => {
  expect(finance.amount(999, 1000)).not.toBeNaN()
  expect(finance.amount(999, 1000)).toBeLessThanOrEqual(999)
  const nrOfDecimals = finance.amount(999, 1000).toString().split('.')[1].length
  expect(nrOfDecimals).toEqual(3)
})

test('returns a random integer between 1 and 999', () => {
  expect(finance.randomInt()).toBeLessThanOrEqual(999)
  expect(finance.randomInt()).toBeGreaterThanOrEqual(1)
})

test('returns an integer between min and max', () => {
  const min = 10
  const max = 100
  expect(finance.randomInt(min, max)).toBeLessThanOrEqual(max)
  expect(finance.randomInt(min, max)).toBeGreaterThanOrEqual(min)
})

test('returns a card number in correct format', () => {
  const cardNumber = finance.cardNumber().split(' ')
  cardNumber.map(n => {
    expect(parseInt(n)).toBeGreaterThanOrEqual(1000)
    expect(parseInt(n)).toBeLessThanOrEqual(9999)
  })
})

test('type of account is not undefined', () => {
  expect(finance.accountType()).toBeDefined()
  expect(typeof finance.accountType()).toBe('string')
})

test('type of account contain Account', () => {
  expect(finance.accountType()).toContain('Account')
})

test('type of transaction is not undefined', () => {
  expect(finance.transactionType()).toBeDefined()
  expect(typeof finance.transactionType()).toBe('string')
})

test('return an account number with default size', () => {
  expect(finance.accountNumber()).toHaveLength(8)
})

test('return an account number with size', () => {
  const size = 10
  expect(finance.accountNumber(size)).toHaveLength(10)
})
