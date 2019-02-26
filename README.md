# `dupe` your front- or backend
[![Codeship Status for Mbanq/dupe](https://app.codeship.com/projects/823affc0-1592-0137-50f9-425cf757dd68/status?branch=develop)](https://app.codeship.com/projects/327760)

Mbanq uses `dupe` to create fake data that can be used during software
development or for running the tests.

## Usage

### Node.js

```js
const dupe = require('@mbanq/dupe');

const randomName = dupe.name.full() // pkha romdol
const randomEmail = dupe.name.email() // pkha@romdol.com
const randomText = dupe.text.sentence()
```


## Methods
- text
  - `sentence(n)` - creates a random sentence with `n` words in it. Default
    value of `n` is 5
- name
   - `first()` - returns a random first name
   - `last()` - returns a random last name
   - `full()` - returns a random full name in the format `first(), last()`
   - `email()` - returns a random email addres. Uses `first()`, `last()` and
     a random domain extension
- location
  - `country()` - returns a random country from the list of countries
  - `city()` - returns a random city from the list of cities
- finance
  - `amount(max, precision)` - returns a random amount <= `max` with the
    provided `precision`. Default `max = 999999`, `precision = 100`
  - `transactionType()` - returns a random transaction type from the list
  - `accountNumber(size)` - returns an 8 digit account number per default.  Can return up to 16 digit long number.
  - `accountType()` - returns a random account type from the list.
  - `randomInt()`- returns a random Integer between a `min` and a `max`
  - `cardNumber()` - returns a credit card number

## Test
```bash
npm i
npm test
```
