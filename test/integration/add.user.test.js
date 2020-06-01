const swaggerFixtures = require('swagger-fixtures');
const app = require('../../src/app');
const swagger = require('../../src/swagger.json');

describe('Add User', () => {
  afterAll(() => {
    app.close();
  });

  describe('Add a user success', () => {
    test('should return valid response', async () => {
      const payload = swaggerFixtures(swagger, 'User');

      const response = await app.inject({
        method: 'POST',
        url: '/v1/user',
        payload,
        headers: { token: '1111-2222-3333-444' },
      });

      const parsed = JSON.parse(response.payload);
      const expectedMessage = 'User added successfully';

      expect(response.statusCode).toBe(201);
      expect(parsed.message).toBe(expectedMessage);
    });
  });

  describe('Add a user failure', () => {
    test('should return a validation error', async () => {
      const payload = swaggerFixtures(swagger, 'User');
      
      // invalidate email
      payload.email = 'andrew.keig.gmail.com';

      const response = await app.inject({
        method: 'POST',
        url: '/v1/user',
        payload,
        headers: { token: '1111-2222-3333-444' },
      });

      const parsed = JSON.parse(response.payload);
      const expectedMessage = 'Email should match format \"email\"';

      expect(response.statusCode).toBe(422);
      expect(parsed.message).toBe(expectedMessage);
    });
  });
});
