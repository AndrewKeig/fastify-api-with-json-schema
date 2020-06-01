const app = require('../../src/app');

describe('Get api status', () => {
  afterAll(() => {
    app.close();
  });

  test('should return a success reponse', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/v1/healthcheck',
    });

    const expectedMessage = 'api status ok';
    const parsed = JSON.parse(response.payload);

    expect(response.statusCode).toBe(200);
    expect(parsed.message).toBe(expectedMessage);
    expect(parsed.requestId).toEqual(1);
  });
});
