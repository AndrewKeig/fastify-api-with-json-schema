const { send } = require('../../services/response');

module.exports.getUserRoute = async (req, reply) => {
  try {
    const user = {
      id: req.params.userId,
      username: 'airasoul',
      firstName: 'andrew',
      lastName: 'keig',
      email: 'andrew.keig@gmail.com',
      password: 'password',
      userStatus: 1,
      dayOfBirth: 'Monday',
      dimensions: { weight: 180, height: 120 },
      active: false,
      phones: [{ number: '07943818181' }],
      address: { street: 'no 4', postcode: 'w1' },
    };

    return send(req, reply, 'User fetched successfully', 200, user);
  } catch (error) {
    return send(req, reply, 'Unable to get user', 500);
  }
};
