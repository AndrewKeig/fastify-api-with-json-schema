const Fastify = require('fastify');
const openapiGlue = require('fastify-openapi-glue');
const { format } = require('./services/response');

const specification = `${__dirname}/swagger.json`;

const app = Fastify({
  logger: true,
  pluginTimeout: 10000,
});

const glueOptions = {
  specification,
  noAdditional: true,
  service: `${__dirname}/routes.js`,
};

const swaggerOptions = {
  mode: 'static',
  specification: {
    path: specification,
    postProcessor: swaggerObject => {
      const swagger = {
        ...swaggerObject,
        host: 'localhost:3000',
        schemes: ['http'],
      };
      return swagger;
    },
  },
  exposeRoute: true,
};

app.register(require('fastify-swagger'), swaggerOptions);

app.register(openapiGlue, glueOptions);

app.setErrorHandler((error, request, reply) => {
  if (error.validation && error.validation.length > 0) {
    const path = error.validation[0].dataPath;
    const field = path.charAt(1).toUpperCase() + path.slice(2);
    const message = `${field} ${error.validation[0].message}`;
    reply.status(422).send(format(request, reply, message));
  }
});

module.exports = app;
