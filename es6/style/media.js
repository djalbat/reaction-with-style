'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const Declarations = require('./declarations');

const { arrayUtilities } = necessary,
      { Query, asContent } = dom,
      { first } = arrayUtilities;

const mediaQueriesQuery = Query.fromExpression('/media/mediaQueries');

class Media {
  constructor(mediaQueries, declarations) {
    this.mediaQueries = mediaQueries;
    this.declarations = declarations;
  }

  asCSS(className) {
    const indent = '    ',
          declarationsCSS = this.declarations.asCSS(indent),
          css = `@media ${this.mediaQueries} {
  .${className} {
${declarationsCSS}
  }
}

`;

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaQueries = mediaQueriesFromNodeAndTokens(node, tokens),
          declarations = Declarations.fromNodeAndTokens(node, tokens),
          media = new Media(mediaQueries, declarations);

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
