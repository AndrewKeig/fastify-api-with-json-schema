const { send } = require('./response');

const getAccount = token => {
  // call a db/cognito/jwt
  if (token === '1111-2222-3333-444') {
    return {
      id: '12345'
    }
  }
};

module.exports.authenticate = async (request, reply) => {
  try {
    const account = await getAccount(request.headers.token);

    if (!account) {
      return send(request, reply, 'Unauthorized', 401);
    }

    request.account = account;
    return true;
  } catch (error) {
    request.log.error(error);
    return send(request, reply, 'Unauthorized', 401);
  }
};
