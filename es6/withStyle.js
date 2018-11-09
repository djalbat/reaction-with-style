'use strict';

const Medias = require('./style/medias'),
      RuleSets = require('./style/ruleSets'),
      Declarations = require('./style/declarations');

class Style {
  constructor(declarations, ruleSets, medias) {
    this.declarations = declarations;
    this.ruleSets = ruleSets;
    this.medias = medias;
  }

  getDeclarations() {
    return this.declarations;
  }

  getRuleSets() {
    return this.ruleSets;
  }

  getMedias() {
    return this.medias;
  }

  override(oldStyle) {
    const declarations = oldStyle.getDeclarations(),
          ruleSets = oldStyle.getRuleSets(),
          medias = oldStyle.getMedias();

    this.unshift(declarations, ruleSets, medias);
  }

  unshift(declarations, ruleSets, medias) {
    this.declarations.unshift(declarations);
    this.ruleSets.unshift(ruleSets);
    this.medias.unshift(medias);
  }

  asCSS(className) {
    const indent = '  ',
          declarationsCSS = this.declarations.asCSS(indent),
          ruleSetsCSS = this.ruleSets.asCSS(className),
          mediasCSS = this.medias.asCSS(className),
          html = `.${className} {
${declarationsCSS}
}

${ruleSetsCSS}${mediasCSS}`;

    return html;
  }

  static fromNodeAndTokens(node, tokens) {
    const declarations = Declarations.fromNodeAndTokens(node, tokens),
          ruleSets = RuleSets.fromNodeAndTokens(node, tokens),
          medias = Medias.fromNodeAndTokens(node, tokens),
          style = new Style(declarations, ruleSets, medias);

    return style;
  }
}

module.exports = Style;
