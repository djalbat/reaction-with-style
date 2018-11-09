'use strict';

const Query = require('./query'),
      utilities = require('./utilities');

const { asContent, replaceNodes, queryByClass, queryByClasses } = utilities;

module.exports = {
  Query,
  asContent,
  replaceNodes,
  queryByClass,
  queryByClasses
};
