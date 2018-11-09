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

renderStyles();

const bodyDOMElement = document.querySelector('body');

ReactDOM.render(

    <View />

  ,
  bodyDOMElement
);
```

Note that you must call `renderStyles()` *after* importing the view but *before* rendering it (forgive the emphasis).
Doing so ensures that the styles generated as a result of executing the view code are inserted into the DOM before the view is itself inserted.
Note that rendering the styles in this way is not done for you as part of the build process.
You must explicitly call the `renderStyles()` function, ideally immediately before the `ReactDOM.render()` function.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

- james.smith@djalbat.com
- http://djalbat.com
