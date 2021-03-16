"use strict";

import { React } from "reaction";

export function isClass(argument) { return isSubclassOf(argument, React.Component); }  ///

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