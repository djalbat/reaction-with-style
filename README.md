# Reaction with Style

Programmatic styles for [Reaction](https://github.com/djalbat/reaction).

To find out what variant of CSS is supported, which is essential to know, please read the [With Style](https://github.com/djalbat/with-style) readme file.

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction-with-style

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction-with-style.git

...then install the dependencies with npm from within the project's root directory:

    npm install

## Usage

```
import withStyle from 'reaction-with-style';   ///

import { ReactDOM } from 'reaction';

import View from './view';

const { renderStyles } = withStyle;

const bodyDOMElement = document.querySelector('body');

renderStyles();

ReactDOM.render(

    <View />

  ,
  bodyDOMElement
);
```

You must call the `renderStyles()` function *after* importing the view but *before* rendering it. Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view itself. Note that rendering the styles in this way is not done as part of the build process, you must explicitly call the `renderStyles()` function, ideally right before you call the `ReactDOM.render()` function.

## Example

Not an example as such. It allows you to test out CSS against the built-in CSS lexer and parser. This is the first port of call should you suspect that your CSS is not being parsed correctly. Both the lexical entries and BNF that make up the CSS grammar can be altered on the fly. Pull requests are welcome for improvements to either.

## Creating primitive components with style

All of the standard HTML elements are supported. For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/with-style/blob/master/es6/tagNames.js) file. You can access these components, which are functional components under the hood, as follows:

```
const Link = withStyle.a`

  color: ${white};
  text-decoration: none;

  @media (min-width: ${desktop}) {
    color: ${black};
  }

`;
```

Now you are free to use the `Link` component in the usual way.

Note that expression interpolation is supported. For example, here colour and breakpoint variables have been used.

To learn more about template literals in general and expression interpolation in particular, see the relevant [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Creating functional components with style

This can be done with the `withStyle()` function:

```
const Header = (props) => {
  const { className } = props;

  return (

    <header className={className}>

      ...

    </header>

  );
};

export default withStyle(Header)`

  ...

`;
```

Note that the `className` property is retrieved from the `props` object and must be used as the value of the attribute of the same name on the outermost JSX element that the function returns.

## Creating class components with style

The process is much the same as for functional components:

```
class Button extends React.Component {
  render(update) {
    const { className } = this.props;

    return (

      <button className={className}>

        ...

      </button>

    );
  }
}

export default withStyle(AccordionButton)`

  ...

`;
```

Again the requisite `className` property is recovered, this time from the `this.props` object.

## Extending the styles of components with style

This is straightforward for all primitive, functional and class components:

```
const HeaderLink = withStyle(Link)`

  ...

`;
```

```
const MainHeader = withStyle(Header)`

  ...

`;
```

```
const SubmitButton = withStyle(Button)`

  ...

`;
```

In each case both the original and new components with style will keep their own styles. The former will inherit all the styles of the latter in each case and can override them as necessary.

## Components with style and composition

Composing components with style obviously causes no problems in general, aside from one small caveat. If you set the `className` property of a component with style, then you will overwrite the class name that has been given to it automatically. In the case of all components with style, however, it is easy to recover the class name and incorporate it into your own:

```
const NavigationButton = (props) => {
  const { className } = Button,
        { children } = props;

  return (
    
    <Button className={`${className} navigation`}>
      {children}
    </Button>
    
  );  
}
```
This situation occasionally arises when using placeholder class names, see below.

## Class components with style and class inheritance

It is perfectly permissible to extend class components with style. If you extend a class component with style without applying any further styling, however, you need to be careful if you overload its `render()` method:

```
class NavigationButton extends Button {
  render(update) {
    const { className } = Button;

    ...
  }
}
```
Note that because the `NavigationButton` class component has no style, the `className` property can only be recovered from the `Button` component with style.

If you were to subsequently style the component, however...

```
export default withStyle(NavigationButton)`

  ...
  
`;
```
...you would now make use of the style in the `render()` method conventionally thus:

```
class NavigationButton extends Button {
  render(update) {
    const { className } = this.props;

    ...
  }
}
```
Unfortunately you cannot quite have your cake and eat it, meaning that you cannot now use the `NavigationButton` component without its own style style, so to speak, because it's `render()` method now expects it. However, if you export it wrapped in the `withStyle()` higher order component, as shown, this can never occur.

## Placeholder class names

Class names are randomly generated hashes of around eight characters, and as such are far from ideal when debugging. It is best to add your own placeholder class names. For example:

```
const MainHeader = (props) => {
  const { className } = props;

  return (

    <header className={`${className} main`}>

      ...

    </header>

  );
};

export default withStyle(MainHeader)`

  ...

`;
```

This makes the identification of HTML elements in your browser's developer tools with their corresponding components far easier. 

## An example of functional classes

Components with style are great for working with styles that relate directly to a component's functionality as opposed to just its appearance.
In the example below, the component can be programmatically displayed and hidden:

```
class Component extends React.Component {}

Object.assign(Component, {
  mixins: [
    hide,
    display,
    isHidden,
    isDisplayed
  ]
});

export default withStyle(Component)`

  .hidden {

    display: none;

   }

`;

function hide() {
  this.addClass('hidden');
}

function display() {
  this.removeClass('hidden');
}

function isHidden() {
  const hidden = this.hasClass('hidden');

  return hidden;
}

function isDisplayed() {
  const hidden = this.isHidden(),
        displayed = !hidden;

  return displayed;
}
```

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
