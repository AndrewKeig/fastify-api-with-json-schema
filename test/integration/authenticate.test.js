const swaggerFixtures = require('swagger-fixtures');
const app = require('../../src/app');
const swagger = require('../../src/swagger.json');

describe('Authenticate', () => {
  afterAll(() => {
    app.close();
  });

  describe('Authenticate token', () => {
    test('should reject if token invalid', async () => {
      const payload = swaggerFixtures(swagger, 'User');

      const response = await app.inject({
        method: 'GET',
        url: '/v1/user/12345',
        payload,
        headers: { token: '12345' },
      });

      const parsed = JSON.parse(response.payload);
      const expectedMessage = 'Unauthorized';

      expect(response.statusCode).toBe(401);
      expect(parsed.message).toBe(expectedMessage);
    });
  });

  describe('Authenticate token', () => {
    test('should reject if token missing', async () => {
      const payload = swaggerFixtures(swagger, 'Development');

      const response = await app.inject({
        method: 'GET',
        url: '/v1/user/12345',
        payload,
        headers: { token: null },
      });

      const parsed = JSON.parse(response.payload);
      const expectedMessage = 'Unauthorized';

      expect(response.statusCode).toBe(401);
      expect(parsed.message).toBe(expectedMessage);
    });
  });
});
