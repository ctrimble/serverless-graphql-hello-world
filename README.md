# Serverless GraphQL Hello World

This project shows how to get a simple GraphQL Hello World application
running with CDK and SAM Local.

## Getting the API running

In one terminal, execute the following commands to get the API running.

```
# use the correct node version
nvm use

# install node modules
npm install

# get node modules into the dist dir
npm run init-dist

# build the typescript, create sam template, and start the api.
npm run start
```

## Calling the API

In a different terminal, execute this command to make a request to the api.

```
npm run request
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npm run synth`   synth a SAM template for SAM local to use
 * `npm run init-dist` gets node_modules into the dist directory
 * `npm run start-api` start SAM local api
 * `npm run request` an example API request to test the stack
 * `npm run start`   calls build, synth, and start-api

 ## Future Improvements

 - Use webpack - this project currently installs node_modules into the dist
                 directory.  This could be avoided by using webpack.
