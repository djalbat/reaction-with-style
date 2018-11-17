'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const { arrayUtilities } = necessary,
      { Query, asContent } = dom,
      { unshift } = arrayUtilities;

const declarationQuery = Query.fromExpression('/*/declaration');

class Declarations {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(declarations) {
    const array = declarations.getArray();

    unshift(this.array, array);
  }

  asCSS(indent) {
    let css = '';

    const length = this.array.length;

    if (length > 0) {
      const lastIndex = length - 1;

      this.array.forEach(function(declaration, index) {
        const declarationCSS = (index === lastIndex) ?
                                `${indent}${declaration}` :
                                  `${indent}${declaration}\n`;

        css += declarationCSS;
      });
    }

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarationNodes = declarationQuery.execute(node),
          array = declarationNodes.map(function(declarationNode) {
            const declarationNodeContent = asContent(declarationNode, tokens),
                  declaration = declarationNodeContent; ///

            return declaration;
          }),
          declarations = new Declarations(array);

    return declarations;
  }
}

module.exports = Declarations;
