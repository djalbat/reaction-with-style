'use strict';

const lexers = require('occam-lexers'), ///
      parsers = require('occam-parsers'); ///

const Style = require('../style');

const { CSSLexer } = lexers,
      { CSSParser } = parsers;

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing(),
      styleMap = {};

function generateStyle(args, className, oldStyle = null) {
  const strings = args.shift(),	///
        content = strings.reduce(function(content, cssString, index) {
          const arg = args[index];

          content += cssString;

          switch (typeof arg) {
            case 'string':
              content += arg;
              break;

            case 'function':
              content += arg();
              break;
          }

          return content;
        }, ''),
        tokens = cssLexer.tokenise(content),
        node = cssParser.parse(tokens),
        style = Style.fromNodeAndTokens(node, tokens);

        if (oldStyle !== null) {
          style.override(oldStyle);
        }

        styleMap[className] = style;
}

function retrieveStyle(className) {
  const style = styleMap[className];

  return style;
}

function retrieveStylesCSS() {
  const classNames = Object.keys(styleMap),
        stylesCSS = classNames.reduce(function(stylesCSS, className) {
          const style = retrieveStyle(className),
                styleCSS = style.asCSS(className);

          stylesCSS += styleCSS;

          return stylesCSS;
        }, '');

  return stylesCSS;
}

module.exports = {
  generateStyle,
  retrieveStyle,
  retrieveStylesCSS
};
