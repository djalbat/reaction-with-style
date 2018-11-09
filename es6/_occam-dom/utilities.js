'use strict';

const parsers = require('occam-parsers'), ///
      necessary = require('necessary');

const { NonTerminalNode } = parsers,
      { arrayUtilities } = necessary,
      { replace } = arrayUtilities;

function asContent(node, tokens) {
  const firstSignificantToken = node.getFirstSignificantToken(),
        lastSignificantToken = node.getLastSignificantToken(),
        firstToken = firstSignificantToken, ///
        lastToken = lastSignificantToken, ///
        firstTokenIndex = tokens.indexOf(firstToken),
        lastTokenIndex = tokens.indexOf(lastToken);

  let content = '';

  for (let index = firstTokenIndex; index <= lastTokenIndex; index++) {
    const token = tokens[index],
          tokenContent = token.getContent();

    content += tokenContent;
  }

  return content;
}

function replaceNodes(node, mappings, parentNode = null) {
  const nodeTerminalNode = node.isTerminalNode();

  if (nodeTerminalNode) {
    return;
  }

  const ruleName = node.getRuleName(),
        childNodes = node.getChildNodes(),
        replacementNodeClass = mappings[ruleName] || null;

  if (replacementNodeClass) {
    const replacedNode = node, ///
          replacementNode = NonTerminalNode.fromRuleNameAndChildNodes(replacementNodeClass, ruleName, childNodes);

    if (parentNode === null) {
      node = replacementNode; ///
    } else {
      const childNodes = parentNode.getChildNodes();

      replace(childNodes, replacementNode, function(childNode) {
        if (childNode === replacedNode) {
          return true;
        }
      });
    }
  }

  parentNode = node;  ///

  childNodes.forEach(function(childNode) {
    const node = childNode; ///

    replaceNodes(node, mappings, parentNode);
  });

  return node;
}

function queryByClass(node, Class, nodes = []) {
  if (node instanceof Class) {
    nodes.push(node);
  }

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach(function(childNode) {
      queryByClass(childNode, Class, nodes);
    });
  }

  return nodes;
}

function queryByClasses(node, Classes, nodes = []) {
  Classes.some(function(Class) {
    if (node instanceof Class) {
      nodes.push(node);

      return true;
    }
  });

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const childNodes = node.getChildNodes();

    childNodes.forEach(function(childNode) {
      queryByClasses(childNode, Classes, nodes);
    });
  }

  return nodes;
}

module.exports = {
  asContent,
  replaceNodes,
  queryByClass,
  queryByClasses
};
