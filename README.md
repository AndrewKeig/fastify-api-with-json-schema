# fastify-api-with-json-schema

### Introduction
This repository is a simple boilerplate for fastify, with json schema validation running of a swagger file.

### API/Routes

The Api and all its routes,  including validation, are defined as a swagger document, see `/swagger.json`

### Install

You can install dependencies with the following:

`npm install`

### Run

You can run the api with the following:

`npm start`

### Healthcheck

You can view a healthcheck endpoint here:

`http://localhost:3000/v1/healthcheck`


### Swagger documentation

When you start the server, the swagger documentation will be available here:

`http://localhost:3000/documentation`


## Test

You can run the tests with the following, the tests are currently written using tap, and fastifys `inject` feature, which does not spin up a server, seee docs on fastify for more on how that works:

`npm test`

## Line

We are using eslint, 

`npm run lint`
