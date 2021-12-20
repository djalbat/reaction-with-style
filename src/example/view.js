"use strict";

import { React } from "reaction";

import { CSSLexer, CSSParser } from "with-style";

const { Component } = React;

import Heading from "./heading";
import RowsDiv from "./div/rows";
import ColumnDiv from "./div/column";
import ColumnsDiv from "./div/columns";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";
import LexicalEntriesTextarea from "./textarea/lexicalEntries";

import { EMPTY_STRING } from "./constants";
import { queryByReactComponent } from "../utilities/query";

export default class View extends Component {
  keyUpHandler = () => {
    try {
      const parseTree = this.getParseTree();

      this.parseTreeTextarea.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.parseTreeTextarea.clearParseTree();
    }
  }

  getParseTree() {
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

  initialise() {
    const { entries } = CSSLexer,
          { bnf } = CSSParser,
          content = EMPTY_STRING, ///
          lexicalEntries = entries; ///

    this.bnfTextarea.setBNF(bnf);
    this.contentTextarea.setContent(content);
    this.lexicalEntriesTextarea.setLexicalEntries(lexicalEntries);

    this.keyUpHandler();
  }

  render(update) {
    return ([

      <Heading>
        Reaction with Style example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical entries
            </SubHeading>
            <LexicalEntriesTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv/>
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea/>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }
}
