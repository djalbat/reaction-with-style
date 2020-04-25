"use strict";

export function query(element, test) {
  const foundDescendant = queryDescendant(element, test),
        descendant = foundDescendant; ///

  return descendant;
}

export function queryByTagName(element, ...tagNames) {
  return query(element, (element) => {
    return tagNames.some((tagName) => {
      return (element.getTagName && toLowerCase(element.getTagName()) === tagName);
    });
  });
}

export function queryByClassName(element, ...classNames) {
  return query(element, (element) => {
    return classNames.some((className) => {
      return (element.hasClass && element.hasClass(className));
    });
  });
}

export function queryByReactClass(element, ...reactClasses) {
  return query(element, (element) => {
    return reactClasses.some((reactClass) => {
      return (element.reactClass === reactClass);
    });
  });
}

export function queryByReactFunction(element, ...reactFunctions) {
  return query(element, (element) => {
    return reactFunctions.some((reactFunction) => {
      return (element.reactFunction === reactFunction);
    });
  });
}

export function queryByReactComponent(element, ...ReactComponents) {
  return query(element, (element) => {
    return ReactComponents.some((ReactComponent) => {
      return (element.reactComponent instanceof ReactComponent);
    });
  });
}

function queryDescendant(element, test) {
  const children = element.getChildren(),
        foundDescendant = children.reduce((foundDescendant, child) => {
          if (foundDescendant === null) {
            const found = test(child);

            if (found) {
              foundDescendant = child; ///
            } else {
              foundDescendant = queryDescendant(child, test);
            }
          }

          return foundDescendant;
        }, null);

  return foundDescendant;
}

function toLowerCase(tagName) {
  return (tagName === null) ? null : tagName.toLowerCase();
}
