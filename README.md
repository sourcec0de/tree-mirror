# NPM Pyroplate

This is a really, really hot boilerplate for writing NPM modules. It features:

* Harmony/ES7 via Babel
* Webpack with module bundling, tree shaking and minification
* Karma test runner with chai
* ESLint

This is suitable for pure libraries that don't use shared dependencies.

## Getting Started

I recommend you modify `package.json` to suit your needs. Update `name, description, author` and GitHub links. When you need to install additional dependencies for your awesome module you can always do

`npm install <dependency> --save`

The `build` directory contains everything that will be released in NPM.

## Installation

You are obviously going to need NodeJS so go ahead and install by issuing (on OSX):

`brew install node`

Which will install `node` and its package manager `npm`. Next you will have to navigate to the project directory
and run

`npm install`

## Development

When developing you can utilize the HMR capabilities of Webpack to automatically bundle and server files for you. Run the hot development server by issuing:

`npm run watch`

## Building

To build your module for distribution, just use

`npm run build:prod`

Alternatively you can build the development version to include source maps

`npm run build:dev`

## Tests

You can write your tests in the `test` directory. To run unit tests just use:

`npm run test`

To run browser tests use

`npm run test:integration`

To run all tests at once use

`npm run test:all`

Visit https://github.com/webpack/karma-webpack for more information about how to setup your test runners in Webpack.

## Publish

To publish your module to npm, just use

`npm run publish:patch` (bumps patch version 1.0.X)  
`npm run publish:feature` (bumps minor version 1.X.0)  
`npm run publish:release` (bumps major version X.0.0)  
