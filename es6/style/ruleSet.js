'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const Declarations = require('./declarations');

const { arrayUtilities } = necessary,
      { Query, asContent } = dom,
      { first } = arrayUtilities;

const selectorsQuery = Query.fromExpression('//selectors');

class RuleSet {
  constructor(selectors, declarations) {
    this.selectors = selectors;
    this.declarations = declarations;
  }

  asCSS(className, indent) {
    const declarationsCSS = this.declarations.asCSS(`  ${indent}`),
          css = `${indent}.${className}${this.selectors} {
${declarationsCSS}
${indent}}

`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const selectors = selectorsFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new RuleSet(selectors, declarations);

    return media;
  }
}

module.exports = RuleSet;

function selectorsFromNodeAndTokens(node, tokens) {
  const selectorsNodes = selectorsQuery.execute(node),
        firstSelectorsNode = first(selectorsNodes),
        selectorsNode = firstSelectorsNode, ///
        selectorsNodeContent = asContent(selectorsNode, tokens),
        selectors = `${selectorsNodeContent}`;

  return selectors;
}
