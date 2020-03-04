'use strict';

const style = require('with-style'),  ///
      reaction = require('reaction');

const { tagNames, classUtilities, stylesUtilities, classNameUtilities } = style;

const { React } = reaction,
      { isClass } = classUtilities,
      { generateClassName, retrieveClassName } = classNameUtilities,
      { renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

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
