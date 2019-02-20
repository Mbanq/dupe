const finance = require('../../src/finance/index.js')

test('generate number', () => {
  expect(finance.amount()).toBeTruthy()
})

test('give digit number', () => {
  expect(finance.digitNumber(5, 10)).toBeTruthy()
})

test('generate card number', () => {
  expect(finance.cardNumber()).toBeTruthy()
})

test('accountType generate type', () => {
  expect(finance.accountType()).toBeTruthy()
})

test('transactionType generate type', () => {
  expect(finance.transactionType()).toBeTruthy()
})

test('generate account number', () => {
  expect(finance.accountNr()).toBeTruthy()
})
