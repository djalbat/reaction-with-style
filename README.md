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

You must call the `renderStyles()` function *after* importing the view but *before* rendering it.
Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view itself.
Note that rendering the styles in this way is not done as part of the build process, you must explicitly call the `renderStyles()` function, ideally right before the `ReactDOM.render()` function.

## Creating primitive components with style

All of the standard HTML elements are supported.
For a complete list of tag names, see the [`tagNames.js`](https://github.com/djalbat/reaction-with-style/blob/master/es6/tagNames.js) file.
You can access these components, which are simple functional components, by dereferencing the `withStyle()` function:

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
For example, here variables for colours and a breakpoint have been substituted into the template literal.
Functions are also supported.
If a function is encountered, it is executed and its return valued is utilised.

To learn more about template literals in general and expression interpolation in particular, see the relevant [MDN page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

## Creating functional components with style

This can be done with the `withStyle()` function, which effectively acts as a higher order component:

```js
const Header = (props) => {
  const { className } = Header;

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

In this case the `withStyle()` function will simply return the function that you pass to it.
The only discernible change it makes is to assign a `className` property, which is the name of the CSS class generated for the component.
You must retrieve this property and pass it as an attribute to the outermost JSX element that the function returns.

## Creating class components with style

The process is much the same as for functional components:

```js
class Button extends React.Component {
  render(update) {
    const { className } = Button,
          ...
          ;

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

Here, not unsurprisingly, you must destructure the class in order to get hold of the requisite `className` property.

## Extending primitive components with style

Primitive components can be extended easily.
For example, the `Link` component above can be extended as follows:

```js
const HeaderLink = withStyle(Link)`

  ...

`;
```
Now both `Link` and `HeaderLink` components are available, each with their own associated style.
The `HeaderLink` component will of course have all of the `Link` component's style and may override it as necessary.

## Extending functional components with style

In these cases a little care is needed.
Rather than destructuring the function to get hold of the `className` property, you must make use of the `retrieveClassName()` function.
For example, if the `Header` functional component is to be extended, it must first be amended in a similar fashion to functional components:

```js
const { retrieveClassName } = withStyle;

const Header = (props, context, element) => {
  const className = retrieveClassName(element);

  return (

    ...

  );
};
```
Note that the arguments now include a third `element` argument which must be passed to the `retrieveClassName()` function.
Now the component can be extended:

```js
const MainHeader = withStyle(Header)`

  ...

`;
```

## Extending class components with style

Again a little care is needed.
For example, if the `Button` class component is to be extended, its `render()` method must first be amended:
```js
const { retrieveClassName } = withStyle;

class Button extends React.Component {
  render(update) {
    const className = retrieveClassName(this),
          ...
          ;

    return (

      ...

    );
  }
}
```
Here you pass `this` to the `retrieveClassName()` function.
Now you can extend the style of the `Button` class:

```js
const MainButton = withStyle(Button)`

  ...

`;
```

If you want to do extend a component's functionality by way of class inheritance, as well as its style, you can do so:

```js
class MainButton extends Button {

  ...

}

module.exports = withStyle(MainButton)`

  ...

`;
```
Whether the `render()` method is in the class being extended or the class doing the extending, so to speak, it must utilise the `retrieveClassName()` function.
For example, the `MainButton` class below contains a new `render()` method that overrides the one in the `Button` class, with the `retrieveClassName()` function still being used:

```js
class MainButton extends Button {
  render(update) {
    const className = retrieveClassName(this),
          ...
          ;

    return (

      ...

    );
  }
}

module.exports = withStyle(MainButton)`

  ...

`;
```

## Retrieving class names

There is no great secret to the `retrieveClassName()` function, by the way.
Elements in the virtual DOM keep references to their corresponding components in order to call their lifecycle methods, for one thing.
The `retrieveClassName()` function simply makes use of this reference in order to destructure the right component function or class:

```js
function retrieveClassName(element) {
  const { className } = element.reactFunction || element.reactComponent.constructor;

  return className;
}
```

In order to avoid any confusion, you could choose to always use the `retrieveClassName()` function regardless of whether any particular component is being extended or not, and this would do no harm at all bar the very slight overhead.

## Composing components with style

This can be done in the usual way for both functional and class components.
The example below uses the latter:

```js
class MainButton extends React.Component {
  render(update) {
    return (

      <Button>
        ...
      </Button>

    );
  }
}

module.exports = MainButton;
```

Note, however, that the `MainButton` class itself is exported without style.
If you were to do otherwise, you would have to set the `className` attribute of the inner `Button` component and in doing so you would rob it of its own style.
It is possible to write components in such as way as to overcome this but doing so is not recommended.
Instead, you should style the child component locally, so to speak:

```js
class MainButton extends React.Component {
  render(update) {
    return (

      <ChildButton>
        ...
      </ChildButton>

    );
  }
}

module.exports = MainButton;

const ChildButton = withStyle(Button)`

  ...

`;
```

Now the `Button` component's original styles will be preserved.

## Placeholder class names

Class names are randomly generated hashes of around eight characters, and as such are far from ideal when debugging.
It is best to add your own placeholder class names, therefore, to make the identification of HTML elements in your browser's developer tools with their corresponding components easier.
For example:

```js
const MainHeader = (props) => {
  const { className } = MainHeader;

  return (

    <header className={`${className} main`}>

      ...

    </header>

  );
};

module.exports = withStyle(MainHeader)`

  ...

`;
```

When using composition, you might want to consider writing your components, whether functional or class based, to make use of any placeholder class names that they have been passed.
Here, for example, a `Header` component is being used:

```js
const MainHeader = (props) => {
  return (

    <Header className="main">

      ...

    </Header>

  );
};

module.exports = MainHeader;
```

Note that because composition is being used, you cannot style with outermost `MainHeader` component anymore.
You should pass down only a placeholder class name and not a class name generated as a result of adding style.
Here is the `Header` component itself:

```js
const Header = (props) => {
  const { className } = Header;

  return (

    <header className={`${className} ${props.className || ''}`}>

      ...

    </header>

  );
};

module.exports = withStyle(Header)`

  ...

`;
```

You can choose to augment the value of the `className` attribute directly in this way, this is what the built-in primitive components do, or you could write your own `retrieveClassName()` function and pass the `props` object as a second parameter.

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
