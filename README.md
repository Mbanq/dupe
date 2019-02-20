# `dupe` your front- or backend
[![Codeship Status for Mbanq/dupe](https://app.codeship.com/projects/823affc0-1592-0137-50f9-425cf757dd68/status?branch=develop)](https://app.codeship.com/projects/327760)

Mbanq uses `dupe` to create the data that can be used during software
development or for running the tests.



## Usage

### Node.js

    var mbanq = require('mbanq');

    var randomName = mbanq.name.full(); // pkha romdol
    var randomEmail = mbanq.name.email(); // phkachan@gmbail.com
    var randomText = mbanq.text.sentence(); // random sentence with random words


## Methods
* text
    * sentence
* name
    * first
    * last
    * full
    * email
* location
    * contry
    * city
* finance
    * amount
    * transactionType
    * accountNr
    * accountType
    * digitNumber
    * cardNumber

## Test
    npm install .
    npm run test
