const swaggerFixtures = require('swagger-fixtures');
const app = require('../../src/app');
const swagger = require('../../src/swagger.json');

describe('Get User', () => {
  afterAll(() => {
    app.close();
  });

  describe('Get a single user success', () => {
    test('should return user', async () => {
      const payload = swaggerFixtures(swagger, 'User');

      const response = await app.inject({
        method: 'GET',
        url: '/v1/user/12345',
        headers: { token: '1111-2222-3333-444' },
      });

      const parsed = JSON.parse(response.payload);
      const expectedMessage = 'User fetched successfully';

      expect(response.statusCode).toBe(200);
      expect(parsed.message).toBe(expectedMessage);
      expect(JSON.stringify(parsed.data)).toBe(JSON.stringify(payload));
    });
  });
});
