"use strict";

import { React } from "reaction";

import { CSSLexer, CSSParser } from "with-style";

const { Component } = React;

import Heading from "./heading";
import ColumnDiv from "./div/column";
import ColumnsDiv from "./div/columns";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import MainVerticalSplitter from "./verticalSplitter/main";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

import { queryByReactComponent } from "../utilities/query";

export default class View extends Component {
  static mixins = [
    initialise,
    keyUpHandler,
    getParseTree
  ];

  componentDidMount() {
    this.bnfTextarea = queryByReactComponent(this, BNFTextarea);
    this.contentTextarea = queryByReactComponent(this, ContentTextarea);
    this.parseTreeTextarea = queryByReactComponent(this, ParseTreeTextarea);
    this.lexicalEntriesTextarea = queryByReactComponent(this, LexicalEntriesTextarea);

    this.initialise();
  }

  componentWillUnmount() {
    delete this.bnfTextarea;
    delete this.contentTextarea;
    delete this.parseTreeTextarea;
    delete this.lexicalEntriesTextarea;
  }

  render(update) {
    return ([

      <Heading>
        Reaction with Style example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Lexical entries
          </SubHeading>
          <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
          <SubHeading>
            BNF
          </SubHeading>
          <BNFTextarea onKeyUp={this.keyUpHandler} />
        </SizeableDiv>
        <MainVerticalSplitter />
        <ColumnDiv>
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea />
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={this.keyUpHandler} />
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }
}

function initialise() {
  const { entries } = CSSLexer,
        { bnf } = CSSParser,
        content = "", ///
        lexicalEntries = entries; ///

  this.bnfTextarea.setBNF(bnf);
  this.contentTextarea.setContent(content);
  this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);

  this.keyUpHandler();
}

function getParseTree() {
  let parseTree = null;

  const bnf = this.bnfTextarea.getBNF(),
        content = this.contentTextarea.getContent(),
        lexicalEntries = this.lexicalEntriesTextarea.getLexicalEntries(),
        entries = lexicalEntries, ///
        cssLexer = CSSLexer.fromEntries(entries),
        cssParser = CSSParser.fromBNF(bnf),
        tokens = cssLexer.tokenise(content),
        node = cssParser.parse(tokens);

  if (node !== null) {
    parseTree = node.asParseTree(tokens);
  }

  return parseTree;
}

function keyUpHandler() {
  try {
    const parseTree = this.getParseTree();

    this.contentTextarea.hideError();

    this.parseTreeTextarea.setParseTree(parseTree);
  } catch (error) {
    this.contentTextarea.showError();

    this.parseTreeTextarea.clearParseTree();
  }
}
