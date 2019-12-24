## React Bare Bones Kit

![wIbljGk.png](https://i.imgur.com/wIbljGk.png)

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
├── dist
|   ├── css
|   |   ├── main.[contenthash:8].css
|   |   └── main.[contenthash:8].css.map
|   ├── js
|   |   ├── main.[hash].js
|   |   └── main.[hash].js.map
|   ├── media
|   |   └── [hash].[ext]
|   └── favicon.ico
|   └── index.html
|
├── config
|   ├── devServer.js
|   ├── envs.js
|   ├── optimization.js
|   ├── output.js
|   ├── paths.js
|   ├── plugins.js
|   └── rules.js
|
├── public
|   ├── favicon.ico
|   └── index.html
|
├── src
|   ├── components
|   ├── images
|   ├── pages
|   ├── root
|   ├── routes
|   ├── styles
|   ├── utils
|   └── index.js
|
├── server.js
└── webpack.config.js
</code></pre>
</details>
<br />

## Installation

1 - Clone the boilerplate repository.

```
 git clone git@github.com:mattcarlotta/react-starter-kit.git
```

2 - Run `yarn install` to install dependencies.

3 - While at the application's root directory, start the `webpack-dev-server` by running `yarn dev`.

## Commands

| `yarn <command>` | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `dev`            | Starts a webpack-dev-server at `localhost:3000`.                                       |
| `initialize`     | Installs dependencies.                                                                 |
| `start`          | Starts a production server at `localhost:8080` (must run `build` and `compile` first). |
| `compile`        | Compiles server application to a `build` folder.                                       |
| `build`          | Compiles client application to a `dist` folder.                                        |
| `checkbuild`     | Checks to see if the `client/dist` folder is ES5 compliant (for IE11).                 |
| `analyze`        | Compiles a production build in `client/dist` and spawns a chunk distribution chart.    |
| `lintjs`         | Lint all of client's `.js` files.                                                      |
| `lintstyles`     | Lint all `.scss` files.                                                                |
| `test`           | Runs `.test.js` files for the client and server.                                       |
| `test:watch`     | Runs `.test.js` files for the client only.                                             |
| `test:watchall`  | Runs and watches `.test.js` files for the client.                                      |
| `test:coverage`  | Runs `.test.js` files and collects coverage for the client.                            |

## Configuration

<details>
<summary>Click to expand configuration</summary>
<pre><code>
- config/devServer.js: webpack devServer options.
- config/envs.js: webpack environment variables.
- config/optimization.js: webpack optimization options.
- config/output.j: webpack output options.
- config/paths.js webpack config folder paths.
- config/plugins.js: webpack plugins options.
- config/rules.js: webpack rules functions.
- src/styles/assets: media assets imports.
- src/styles/extensions: partial shared extensions.
- src/styles/globals: global asset imports (see notes in <a href="https://github.com/mattcarlotta/react-bb-kit/blob/master/src/styles/globals/globals.scss#L1-L32">global.scss</a> for important information).
- src/styles/variables: partial shared variables.
- src/styles/styles.scss: indexed partial files for easier sharing (see notes in <a href="https://github.com/mattcarlotta/react-bb-kit/blob/master/src/styles/styles.scss#L1-L48">styles.scss</a> for important information).
- src/utils/setup/setupTest.js: enzyme test setup for your React components (see <a href="https://github.com/mattcarlotta/react-bb-kit/blob/master/src/utils/setup/setupTests.js#L8-L16">notes</a> in setup.js for important information).
- .babelrc: babel config for react js files.
- .browserslistrc: browsers list config.
- .eslintignore: eslint config for ignoring scss files.
- .eslintrc: eslint config for linting js files.
- .prettierc: prettier config.
- .stylelintrc.json: stylelint config for linting scss files.
- jest.json: jest config.
- server.js: an express configuration to serve production assets.
- webpack.config.js: a single webpack environment based config.
</code></pre>
</details>
<br />

## Packages Incorporated

To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/react-bb-kit/blob/master/package.json#L106-L183">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/react-bb-kit/issues">here</a>.

<details>
<summary>Click to expand brief overview of packages</summary>
<pre><code>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/smooth-code/error-overlay-webpack-plugin">Error Overlay Webpack Plugin</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://github.com/geowarin/friendly-errors-webpack-plugin">Friendly Errors Webpack Plugin</a>
- <a href="https://github.com/typicode/husky">Husky</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/lodash/lodash">Lodash</a>
- <a href="https://github.com/webpack-contrib/mini-css-extract-plugin">Mini CSS Extract Plugin</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/prop-types">PropTypes</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a>
- <a href="https://github.com/webpack-contrib/sass-loader">Sass Loader</a>
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
- <a href="https://github.com/webpack-contrib/style-loader">Style Loader</a>
- <a href="https://github.com/webpack/webpack">Webpack</a>
- <a href="https://www.npmjs.com/package/webpackbar">Webpackbar</a>
- <a href="https://github.com/webpack/webpack-dev-server">Webpack Dev Server (Hot Loaded)</a>
</code></pre>
</details>
<br />
