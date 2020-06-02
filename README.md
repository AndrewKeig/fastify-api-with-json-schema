# fastify-api-with-json-schema

### Introduction
This repository is a simple boilerplate for fastify, with json schema validation running of an external swagger file.

By default, validation rules are defined as code, on routes defined. In this example we have an external swagger document which we will use to define our api.

To achieve this we use a couple of modules:

- fastify-openapi-glue
- fastify-swagger
- swagger-fixtures
 
This series of posts contains three entries: 
 
1. Building APIs with Fastify, JSON Schema - setup and configure fastify and fastify-openapi-glue, to bind the swagger specification to fastify routes.
 
2. Documentating APIs with fastify, JSON Schema - setup fastify-swagger to generate swagger documentation.
 
3. Testing APis with Fastify, JSON Schema - add integration tests using swagger-fixtures, to create test fixtures, which effectively binds our tests to the external swagger document using swagger examples.

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

## Lint

We are using eslint, 

`npm run lint`
