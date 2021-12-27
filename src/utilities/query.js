"use strict";

export function queryByClass(element, Class, maximumDepth = Infinity) {
  const test = (element) => (element instanceof Class),
        depth = maximumDepth; ///

  return query(element, depth, test);
}

function query(element, depth, test) {
  let foundElement = null;

  if (depth > 0) {
    depth--;

    const children = element.getChildren();

    children.some((child) => {
      const element = child,  ///
            found = test(element)

      foundElement = found ?
                       element : ///
                         query(element, depth, test);

      if (foundElement !== null) {
        return true;
      }
    });
  }

  return foundElement;
}
