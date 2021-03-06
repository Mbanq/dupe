'use strict'

const rand = require('../util.js')

const amount = (max = 999999, precision = 2) => {
  const decimals = Math.pow(10, precision)
  return (
    Math.floor(
      Math.random() * (max * decimals - 1 * decimals) + 1 * decimals
    ) /
    (1 * decimals)
  ).toFixed(precision)
}

const randomInt = (min = 1, max = 999) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const cardNumber = () => {
  return (
    randomInt(1000, 9999) +
    ' ' +
    randomInt(1000, 9999) +
    ' ' +
    randomInt(1000, 9999) +
    ' ' +
    randomInt(1000, 9999)
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

const accountNumber = (size = 8) => {
  return Math.random().toString().slice(2, size + 2)
}

const finance = {
  amount,
  transactionType,
  accountNumber,
  accountType,
  randomInt,
  cardNumber
}

module.exports = finance
