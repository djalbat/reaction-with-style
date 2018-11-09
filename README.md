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
It is worth repeating that you must explicitly call the `renderStyles()` function, ideally immediately before the `ReactDOM.render()` function.

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

module.exports = withStyle(Header)`

  ...

`;
```

In this case the `withStyle()` function will simply return the function that you pass to it.
The only change it makes is to assign a `className` property to it.
This is the name of the CSS class generated for the component.
You must retrieve this property and pass it as an argument to the topmost JSX element that the function returns.

### Creating class components with styles

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

### Extending components with styles

Primitive components can be extended straightforwardly.
Consider the `Link` component created earlier.
It can be extended thus:

```js
const HeaderLink = withStyle(Link)`

  ...

`;
```
Now both `Link` and `HeaderLink` components are available, each with their own associated styles.

For functional and class components, a little care is needed.
Rather than destructuring the requisite function or class, you must make use of the `retrieveClassName()` function.
For example, if the `Header` functional component is to be extended, it must first be amended thus:

```js
const { retrieveClassName } = withStyle;

const Header = (props, context, element) => {
  const className = retrieveClassName(element);

  return (

    ...

  );
};
```
Note that the arguments now include a third `element` argument that must be passed to the `retrieveClassName()` function.
Now the component can be extended thus:

```js
const MainHeader = withStyle(Header)`

  ...

`;
```
Similarly for class components.
For example, if the `Button` class component is to be extended, it must first be amended thus:
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
Now you can extend the component thus:

```js
const MainButton = withStyle(Button)`

  ...

`;
```

Or, if you want to do more than extend its styles, extending its functionality too, yoiu can do so:

```js
class MainButton extends Button {

  ...

}

module.exports = withStyle(MainButton)`

  ...

`;
```
Finally for class components, if you include a `render()` method not in the class being extended but in the class doing the extending, so to speak, you again need to utilise the `retrieveClassName()` function:

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
In order to avoid any confusion, you could always use the `retrieveClassName()` function regardless of whether components are being extended or not, and this would do no harm at all.

## What kind of CSS is supported?

Not all of it.
You cannot, for example, make references to child elements at all.
In the `Header` usage example above, for example, you would not be able to style the child `Link` component as follows:

```css
...

a {

  ...

}
```
Not being able to do so is restrictive, admittedly, but deliberately so.
After all the idea is to tightly bind a component to its style.
If you really must style the child elements of components in some way, and there are occasions when doing so is unavoidable, add a fixed class name to the component and define this class in an external style sheet.
For example, say you wanted to create a component for viewing markdown.
The markdown is rendered as HTML and you would like to style the resultant images, titles and so on.
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

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
