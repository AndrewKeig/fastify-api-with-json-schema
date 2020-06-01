# fastify-swagger-api

### Introduction
This repository is a simple boilerplate for fastify, with swagger/json schema validation running of a swagger file.


### Tools

The api uses https://www.fastify.io/,  which is the fastest framework for node.js, and supports swagger/json-schema out of the box.

To achieve this we use a couple of key plugins, to bind the swagger doc to fastify routes:

- https://github.com/seriousme/fastify-openapi-glue

- https://github.com/fastify/fastify-swagger

For testing we are using swagger-fixtures, to create test fixtures

- https://github.com/AndrewKeig/swagger-fixtures

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
