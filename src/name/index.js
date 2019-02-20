const rand = require('../util.js')
const firstName = require('./first.js')
const lastName = require('./last.js')

const name = {
  first: () => {
    return rand(firstName)
  },
  last: () => {
    return rand(lastName)
  },
  full: () => {
    return `${name.first()}, ${name.last()}`
  },
  email: () => {
    const extensions = ['com', 'org', 'net', 'io']
    return `${name
      .first()
      .toLowerCase()
      .replace(/' /g, '')}@${name
      .last()
      .toLowerCase()
      .replace(/' /g, '')}.${rand(extensions)}`
  }
}

module.exports = name
