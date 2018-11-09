# Reaction with Style

Programmatic styles for [Reaction](https://github.com/djalbat/reaction).

This package was inspired by [styled-components](https://www.styled-components.com/). It is to [Reaction](https://github.com/djalbat/reaction) what styled components are to React, although there are differences.

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
      withStyle = require('reaction-with-style');

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

You must call the `renderStyles()` function *after* importing the view but *before* rendering it.
Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view is itself inserted.
Note that rendering the styles in this way is not done for you as part of the build process.
You must explicitly call the `renderStyles()` function, ideally immediately before the `ReactDOM.render()` function.

### Creating primitive components with styles

All of the standard HTML elements are supported.
For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/reaction-with-style/blob/master/es6/tagNames.js) file.
You can access these components, which are actually pure functional components, by dereferencing the `withStyle()` function:

```js
const Link = withStyle.a`

        color: ${white};
        text-decoration: none;

        @media (min-width: ${desktop}) {
          color: ${black};
        }

      `;
```

Now you are free to use the `Link` component as JSX is the usual way.

Note that expression interpolation is supported.
Here variables for colours and a breakpoint have been substituted into the template literal, for example.
Functions are also supported.
If a function is encountered, it is executed and its return valued is utilised.
To learn more about template literals in general and expression interpolation in particular, see the MDN page on [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

### Creating functional components with styles

This can be done easily with the `withStyle()` function, which effectively acts as a higher order component:

```js
const Header = (props) => {
  const { className } = Header;

  return (

    <header className={className}>

      ...

    </header>

  );
};
```

module.exports = withStyle(Header)`

  ...

`;

In fact in this case the `withStyle()` function will simply return the function that you pass to it.
The only change it makes is to assign a `className` property to the function.
This is the name of the CSS class it generates for the component.
You must retrieve this and pass it as an argument to the topmost JSX element that the function returns.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
