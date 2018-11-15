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

### Creating primitive components with style

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

### Creating functional components with style

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

### Creating class components with style

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

### Extending components with style

Primitive components can be extended easily.
For example, the `Link` component above can be extended as follows:

```js
const HeaderLink = withStyle(Link)`

  ...

`;
```
Now both `Link` and `HeaderLink` components are available, each with their own associated style.

For functional and class components, a little care is needed.

For functional components, rather than destructuring the requisite function to get hold of the `className` property, you must make use of the `retrieveClassName()` function.
For example, if the `Header` functional component is to be extended, it must first be amended:

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
Similarly for class components.
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

If you want to do extend a component's functionality as well as its style, you can do so:

```js
class MainButton extends Button {

  ...

}

module.exports = withStyle(MainButton)`

  ...

`;
```
If the `render()` method is in the class being extended and not the class doing the extending, so to speak, the `render()` method must still utilise the `retrieveClassName()` function.
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

## What CSS is supported?

Not all of it.
You cannot, for example, make references to child elements at all.
In the style for the `Header` component, for example, you would not be able to style the child `Link` component as follows:

```css
...

a {

  ...

}
```
Not being able to do so is restrictive, admittedly, but deliberately so.
After all the idea is to tightly bind a component to its style.
Hence we create a child `Link` component, rather than style it by way of its parent.

If you really must style the child elements of components in some way, and there are occasions this is unavoidable, add a fixed class name to the component and define this class in an external style sheet.
For example, say you wanted to create a component for viewing markdown.
The markdown is to be rendered as HTML and you would like to style the resultant images, titles and so on.
You could implement your component thus:

```js
class MarkdownViewer extends React.Component {

  ...

  render(update) {
    const className = retrieveClassName(this),
          ...
          ;

    return (

      <section className={`markdown {className}`}>

      ...

      </section>

    );
  }
}

module.exports = withStyle(MarkdownViewer)`

  ...

`;
```
Now you could create an external style sheet for styling the rendered HTML:
```css
.markdown {

   ...

}
```
Other than this restriction, most of standard CSS is supported.
All of the following CSS is fine, for example:
```css
  color: ${black};
  border: ${border};
  display: block;
  position: relative;

  .error {
    border-color: ${fiery};
  }

  :disabled {
    background-color: ${white};
  }

  ::after {
    content: "×";
    position: absolute;
    font-family: monospace;
  }

  [readonly] {
    color: ${shuttle};
  }

  @media (min-width: ${desktop}) {
    margin: 0;
  }
```
Note that all of the selectors, including the class selector, relate to the the component's outermost rendered element.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
