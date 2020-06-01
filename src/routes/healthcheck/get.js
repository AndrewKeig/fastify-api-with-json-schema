const { send } = require('../../services/response');

module.exports.getHealthcheckRoute = async (request, reply) => {
  try {
    return send(request, reply, 'api status ok', 200);
  } catch (error) {
    return send(request, reply, 'api status down', 500);
  }
};
