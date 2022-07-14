"use strict";

import { React } from "reaction";

export function isClass(argument) { return isSubclassOf(argument, React.Component); }  ///

function isSubclassOf(argument, Class) {
  const subclassOf = (argument.prototype instanceof Class);

  return subclassOf;
}
