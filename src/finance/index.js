'use strict'

const rand = require('../util.js')

const amount = (max = 999999, precision = 100) => {
  return (
    Math.floor(
      Math.random() * (max * precision - 1 * precision) + 1 * precision
    ) /
    (1 * precision)
  )
}

const digitNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const cardNumber = () => {
  return (
    digitNumber(1000, 9999) +
    ' ' +
    digitNumber(1000, 9999) +
    ' ' +
    digitNumber(1000, 9999) +
    ' ' +
    digitNumber(1000, 9999)
  )
}

const accountType = () => {
  return `${rand([
    'Checking',
    'Savings',
    'Money Market',
    'Investment',
    'Home Loan',
    'Credit Card',
    'Auto Loan',
    'Personal Loan'
  ])} Account`
}

const transactionType = () => {
  return rand(['deposit', 'withdrawal', 'payment', 'invoice'])
}

const accountNr = (size = 10) => {
  return Math.random().toString().slice(2, size)
}

const finance = {
  amount,
  transactionType,
  accountNr,
  accountType,
  digitNumber,
  cardNumber
}

module.exports = finance
