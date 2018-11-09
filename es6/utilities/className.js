'use strict';

const uuidV4 = require('uuid/v4'),
      Hashids = require('hashids'),
      randomSeed = require('random-seed');

const constants = require('../constants');

const { ALPHABET, CLASSNAME_LENGTH, RANDOM_NUMBER_MAXIMUM } = constants,
      uuid = uuidV4(), ///
      random = randomSeed.create(uuid),
      length = CLASSNAME_LENGTH,
      alphabet = ALPHABET,
      hashids = new Hashids('', length, alphabet),
      randomNumberMaximum = RANDOM_NUMBER_MAXIMUM;

let randomNumber = random(randomNumberMaximum);

function generateClassName() {
  const hash = hashids.encode(randomNumber++),
        className = hash; ///

  return className;
}

module.exports = {
  generateClassName
};
