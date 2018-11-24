'use strict';

const reaction = require('reaction');

const tagNames = require('./tagNames'),
      stylesUtilities = require('./utilities/styles'),
      classNameUtilities = require('./utilities/className');

const { React } = reaction,
      { generateClassName } = classNameUtilities,
      { generateStyle, retrieveStyle, retrieveStylesCSS } = stylesUtilities;

function withStyle(ClassOrFunction) {
  return function() {
    const args = [...arguments];  ///

    let superStyle = null,
        { className } = ClassOrFunction;

    if (className) {
      ClassOrFunction = isClass(ClassOrFunction) ?
                          class extends ClassOrFunction {} : ///
                            ClassOrFunction.bind({}); ///

      superStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, superStyle);

    Object.assign(ClassOrFunction, {
      className
    });

    return ClassOrFunction;
  };
}

function renderStyles() {
  const stylesCSS = retrieveStylesCSS(),
        innerHTML = `
        
${stylesCSS}`,
        headDOMElement = document.querySelector('head'),
        styleDOMElement = document.createElement('style');

  Object.assign(styleDOMElement, {
    innerHTML
  });

  headDOMElement.appendChild(styleDOMElement);
}

function retrieveClassName(element) {
  const { className } = element.reactFunction || element.reactComponent.constructor;

  return className;
}

Object.assign(withStyle, {
  renderStyles,
  retrieveClassName
});

tagNames.forEach(function(tagName) {
  Object.defineProperty(withStyle, tagName, {
    get: () => function() {
      const args = [...arguments],  ///
            className = generateClassName();

      generateStyle(args, className);

      const Function = (props, context, element) => {
        const className = retrieveClassName(element),
              { children } = props;

        props.className = `${className} ${props.className || ''}`;	///

        return React.createElement(tagName, props, ...children);
      };

      Object.assign(Function, {
        className
      });

      return Function;
    }
  });
});

module.exports = withStyle;

function isClass(argument) { return isSubclassOf(argument, React.Component); }  ///

function isSubclassOf(argument, Class) {
  let subclass = false;

  if (argument.name === Class.name) {   ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
