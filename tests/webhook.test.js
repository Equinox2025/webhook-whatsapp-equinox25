const request = require('supertest');
const express = require('express');
const handler = require('../api/webhook');

function createServer() {
  const app = express();
  app.use(express.json());
  app.all('/api/webhook', (req, res) => handler(req, res));
  return app;
}

describe('webhook handler', () => {
  const app = createServer();

  test('GET with correct verify token returns challenge', async () => {
    const res = await request(app)
      .get('/api/webhook')
      .query({
        'hub.mode': 'subscribe',
        'hub.verify_token': 'equinox-token',
        'hub.challenge': '12345',
      });
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('12345');
  });

  test('GET with invalid token returns 403', async () => {
    const res = await request(app)
      .get('/api/webhook')
      .query({
        'hub.mode': 'subscribe',
        'hub.verify_token': 'wrong',
        'hub.challenge': 'abc',
      });
    expect(res.statusCode).toBe(403);
  });

  test('POST request returns 200', async () => {
    const res = await request(app)
      .post('/api/webhook')
      .send({ foo: 'bar' });
    expect(res.statusCode).toBe(200);
  });
});
