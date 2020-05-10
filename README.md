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

# start the watch process, create sam template, and start the api.
npm run start
```

## Calling the API

In a different terminal, execute this command to make a request to the api.

```
npm run request-hello
```

## Useful commands

 * `npm run start`   calls watch, synth-sam, and start-api
 * `npm run request-hello` an example API request to test the stack
 * `npm run request-goodbye` a second API request to test the stack
 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npm run synth-sam` synth a SAM template for SAM local to use
 * `npm run start-api` start SAM local api

