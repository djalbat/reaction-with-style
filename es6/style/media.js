'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const RuleSets = require('./ruleSets'),
      Declarations = require('./declarations');

const { arrayUtilities } = necessary,
      { Query, asContent } = dom,
      { first } = arrayUtilities;

const mediaQueriesQuery = Query.fromExpression('/media/mediaQueries');

class Media {
  constructor(mediaQueries, declarations, ruleSets) {
    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
    this.ruleSets = ruleSets;
  }

  asCSS(className) {
    const declarationsCSS = this.declarations.asCSS('    '),
          ruleSetsCSS = this.ruleSets.asCSS(className, '  '),
          css = `@media ${this.mediaQueries} {
  .${className} {
${declarationsCSS}
  }
  
${ruleSetsCSS}
}

`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations, ruleSets);

    return media;
  }
}

module.exports = Media;

function mediaQueriesFromNodeAndTokens(node, tokens) {
  const mediaQueriesNodes = mediaQueriesQuery.execute(node),
        firstSelectorsNode = first(mediaQueriesNodes),
        mediaQueriesNode = firstSelectorsNode, ///
        mediaQueriesNodeContent = asContent(mediaQueriesNode, tokens),
        mediaQueries = `${mediaQueriesNodeContent}`;

  return mediaQueries;
}
