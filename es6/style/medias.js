'use strict';

const dom = require('../_occam-dom'),  ///
      necessary = require('necessary');

const Media = require('./media');

const { arrayUtilities } = necessary,
      { Query } = dom,
      { unshift } = arrayUtilities;

const mediaQuery = Query.fromExpression('/stylesheet/media');

class Medias {
  constructor(array) {
    this.array = array;
  }

  getArray() {
    return this.array;
  }

  unshift(medias) {
    const array = medias.getArray();

    unshift(this.array, array);
  }

  asCSS(className) {
    const css = this.array.reduce(function(css, media) {
      const mediaCSS = media.asCSS(className);

      css += mediaCSS;

      return css;
    }, '');

    return css;
  }

  static fromNodeAndTokens(node, tokens) {
    const mediaNodes = mediaQuery.execute(node),
          array = mediaNodes.map(function(mediaNode) {
            const node = mediaNode, ///
                  media = Media.fromNodeAndTokens(node, tokens);

            return media;
          }),
          medias = new Medias(array);

    return medias;
  }
}

module.exports = Medias;
