'use strict';

const reaction = require('reaction');

const tagNames = require('./tagNames'),
      stylesUtilities = require('./utilities/styles'),
      classNameUtilities = require('./utilities/className');

const { React } = reaction,
      { generateClassName } = classNameUtilities,
      { generateStyle, retrieveStyle, retrieveStylesCSS } = stylesUtilities;

function withStyle(ComponentOrFunction) {
  return function() {
    const args = [...arguments];  ///

    let oldStyle = null,
        { className } = ComponentOrFunction;

    if (className) {
      ComponentOrFunction = isSubclassOf(ComponentOrFunction, React.Component) ?
                              class extends ComponentOrFunction {} :
                                ComponentOrFunction.bind({});

      oldStyle = retrieveStyle(className);
    }

    className = generateClassName();

    generateStyle(args, className, oldStyle);

    Object.assign(ComponentOrFunction, {
      className
    });

    return ComponentOrFunction;
  };
}

function appendStyles() {
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
  appendStyles,
  retrieveClassName
});

tagNames.forEach(function(tagName) {
  Object.defineProperty(withStyle, tagName, {
    get: () => function() {
      const args = [...arguments],  ///
            className = generateClassName();

      generateStyle(args, className);

      return (props) => {
        const { children } = props;

        props.className = props.className ?
                           `${className} ${props.className}` :
                              className;

        return React.createElement(tagName, props, ...children);
      };
    }
  });
});

module.exports = withStyle;

function isSubclassOf(argument, Class) {
  let subclass = false;

  if (argument === Class) {   ///
    subclass = true;
  } else {
    argument = Object.getPrototypeOf(argument); ///

    if (argument !== null) {
      subclass = isSubclassOf(argument, Class);
    }
  }

  return subclass;
}
