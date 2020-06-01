const { authenticate } = require('./services/authentication');
const { getHealthcheckRoute } = require('./routes/healthcheck/get');
const { getUserRoute } = require('./routes/user/get');
const { addUserRoute } = require('./routes/user/add');

module.exports = {
  getAPIStatus: async (request, reply) => {
    await getHealthcheckRoute(request, reply);
  },
  getUser: async (request, reply) => {
    await authenticate(request, reply);
    await getUserRoute(request, reply);
  },
  addUser: async (request, reply) => {
    await authenticate(request, reply);
    await addUserRoute(request, reply);
  },
};
