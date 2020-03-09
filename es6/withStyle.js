'use strict';

import { React } from 'reaction';
import { tagNames, classUtilities, stylesUtilities, classNameUtilities } from 'with-style';

const { isClass } = classUtilities,
      { generateClassName, retrieveClassName } = classNameUtilities,
      { renderStyles, generateStyle, retrieveStyle } = stylesUtilities;

export default function withStyle(ClassOrFunction) {
  return function() {
    const args = [...arguments];  ///

    let { className } = ClassOrFunction;

    const superStyle = retrieveStyle(className);

    className = generateClassName();

    generateStyle(args, className, superStyle);

    const ClassOrFunctionClass = isClass(ClassOrFunction);

    if (ClassOrFunctionClass) {
      const Class = ClassOrFunction;  ///

      ClassOrFunction = class extends Class {

        render(update) {
          this.props = appendClassNameToProps(className, this.props);

          return super.render(update);
        }
      };
    } else {
      const Function = ClassOrFunction; ///

      ClassOrFunction = (props, context, element) => {
        props = appendClassNameToProps(className, props);

        return Function(props, context, element);
      };
    }

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
        const { children } = props;

        props = appendClassNameToProps(className, props);

        return React.createElement(tagName, props, ...children);
      };

      Object.assign(Function, {
        className
      });

      return Function;
    }
  });
});

function appendClassNameToProps(className, props) {
  props = props.hasOwnProperty('className') ? props : {...props, className}; ///

  return props;
}
