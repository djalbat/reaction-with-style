'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const RuleSet = require('./ruleSet');

const { arrayUtilities } = necessary,
      { Query } = dom,
      { unshift } = arrayUtilities;

const ruleSetQuery = Query.fromExpression('/*/ruleSet');

class RuleSets {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(ruleSets) {
    const array = ruleSets.getArray();

    unshift(this.array, array);
  }

  asCSS(className, indent) {
    const css = this.array.reduce(function(css, ruleSet) {
      const ruleSetCSS = ruleSet.asCSS(className, indent);

      css += ruleSetCSS;

      return css;
    }, '');

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const ruleSetNodes = ruleSetQuery.execute(node),
          array = ruleSetNodes.map(function(ruleSetNode) {
            const node = ruleSetNode, ///
                  ruleSet = RuleSet.fromNodeAndTokens(node, tokens);

            return ruleSet;
          }),
          ruleSets = new RuleSets(array);

    return ruleSets;
  }
}

module.exports = RuleSets;
