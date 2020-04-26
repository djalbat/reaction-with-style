"use strict";

export function getNextSibling(element) {
  let nextSibling = null;

  const siblings = element.parent.children; ///

  backwardsSome(siblings, (sibling) => {
    if (sibling === element) {
      return true;
    }

    nextSibling = sibling;
  });

  return nextSibling;
}

export function getPreviousSibling(element) {
  let previousSibling = null;

  const siblings = element.parent.children; ///

  forwardsSome(siblings, (sibling) => {
    if (sibling === element) {
      return true;
    }

    previousSibling = sibling;
  });

  return previousSibling;
}

function forwardsSome(array, test) {
  const arrayLength = array.length,
        lastIndex = arrayLength - 1;

  for (let index = 0; index <= lastIndex; index++) {
    const element = array[index],
          result = test(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}

function backwardsSome(array, test) {
  const arrayLength = array.length,
        lastIndex = arrayLength - 1;

  for (let index = lastIndex; index >= 0; index--) {
    const element = array[index],
          result = test(element, index);

    if (result) {
      return true;
    }
  }

  return false;
}
