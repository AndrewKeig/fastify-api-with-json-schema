const { send } = require('../../services/response');

module.exports.addUserRoute = async (req, reply) => {
  try {
    return send(req, reply, 'User added successfully', 201);
  } catch (error) {
    return send(req, reply, 'Unable to add user', 500);
  }
};
