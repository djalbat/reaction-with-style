# Reaction with Style

Programmatic styles for [Reaction](https://github.com/djalbat/reaction).

This package was inspired by [styled-components](https://www.styled-components.com/). It is to Reaction what styled components are to React, although there are differences.

To find out what variant of CSS is supported, which is essential to know, please read the [With Style](https://github.com/djalbat/with-style) readme file.

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction-with-style

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction-with-style.git

...then install the necessary modules with npm from within the project's root directory:

    npm install

## Usage

```js
const reaction = require('reaction'),
      withStyle = require('reaction-with-style');   ///

const { ReactDOM } = reaction,
      { renderStyles } = withStyle;

const View = require('./view');

const bodyDOMElement = document.querySelector('body');

renderStyles();

ReactDOM.render(

    <View />

  ,
  bodyDOMElement
);
```

You must call the `renderStyles()` function *after* importing the view but *before* rendering it. Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view itself. Note that rendering the styles in this way is not done as part of the build process, you must explicitly call the `renderStyles()` function, ideally right before the `ReactDOM.render()` function.

## Creating primitive components with style

All of the standard HTML elements are supported. For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/reaction-with-style/blob/master/es6/tagNames.js) file. You can access these components, which are simple functional components, by dereferencing the `withStyle()` function:

```js
const Link = withStyle.a`

  color: ${white};
  text-decoration: none;

  @media (min-width: ${desktop}) {
    color: ${black};
  }

`;
```

Now you are free to use the `Link` component in the usual way.

Note that expression interpolation is supported.
For example, here colour and breakpoint variables have been used.

To learn more about template literals in general and expression interpolation in particular, see the relevant [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Creating functional components with style

This can be done with the `withStyle()` function, which effectively acts as a higher order component:

```js
const Header = (props) => {
  const { className } = props;

  return (

    <header className={className}>

      ...

    </header>

  );
};

module.exports = withStyle(Header)`

  ...

`;
```

Note that the `className` property is retrieved from the `props` object and must be used as the value of the attribute of the same name on the outermost JSX element that the function returns.

## Creating class components with style

The process is much the same as for functional components:

```js
class Button extends React.Component {
  render(update) {
    const { className } = this.props;

    return (

      <button className={className} ...>

        ...

      </button>

    );
  }
}

module.exports = withStyle(AccordionButton)`

  ...

`;
```

Again the requisite `className` property is recovered, this time from the `this.props` object.

## Extending the styles of components with style

This is straightforward for all primitive, functional and class components:

```js
const HeaderLink = withStyle(Link)`

  ...

`;
```

```js
const MainHeader = withStyle(Header)`

  ...

`;
```

```js
const SubmitButton = withStyle(Button)`

  ...

`;
```

In each case both the original and new components with style will keep their own styles. The former will inherit all the styles of the latter in each case and can override them as necessary. 

## Class components with style and class inheritance

It is perfectly permissible to extend class components with style. If you extend a class component with style without applying any further styling, however, you need to be careful if you overload its `rendder()` method:  

```js
class NavigationButton extends Button {
  render(update) {
    const { className } = Button;

    ...
  }
}
```
Note that because the `NavigationButton` class component has no style, the `className` property must be recovered from the `Button` subclass.

If you were to subsequently style 

## An example of functional classes

Programmatic styles are great for working with classes that relate directly to a component's functionality as opposed to just to appearances.
In the example below, the usual `React.Component` class has been extended to provide a component that can be programmatically displayed and hidden:

```js
class Component extends React.Component {}

Object.assign(Component, {
  mixins: [
    hide,
    display,
    isHidden,
    isDisplayed
  ]
});

module.exports = withStyle(Component)`

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
