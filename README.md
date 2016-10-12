# Tree-mirror

This node module provides a way to observe DOM tree changes and mirror them between two parties.

To see how this works check the `README.md` in the `build` directory.

## Development

Make sure `node` and `npm` is installed. Then installed the required development dependencies by navigating to the project root and issuing

`npm install`

You can run the Webpack development server via

`npm run watch`

Alternatively you can build the dev or production versions respectively

```
npm run build:dev
npm run build:prod
```

which will output to the `build` directory. However if you are running the dev server, you will not see any file saved.

## Tests

To run unit tests use

`npm run test:unit`

To run integration tests in browser with Karma use

`npm run test:integration`

To run all tests in a single run use

`npm run test:all`

## Other

To remove bundles and logs we use the cleanup gulp task

`npm run clean`
