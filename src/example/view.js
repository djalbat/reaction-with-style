"use strict";

import withStyle from "../index";  ///

import { React } from "reaction";

import { CSSLexer, CSSParser } from "with-style";

const { Component } = React;

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
import { queryByClass } from "../utilities/query";

class View extends Component {
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
    const maximumDepth = 9;

    this.bnfTextarea = queryByClass(this, BNFTextarea, maximumDepth);
    this.contentTextarea = queryByClass(this, ContentTextarea, maximumDepth);
    this.parseTreeTextarea = queryByClass(this, ParseTreeTextarea, maximumDepth);
    this.lexicalEntriesTextarea = queryByClass(this, LexicalEntriesTextarea, maximumDepth);

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
    const { className } = this.props;

    return ([

      <div className={`${className} view`}>
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
      </div>

    ]);
  }
}

export default withStyle(View)`

  padding: 1rem;
  
`;