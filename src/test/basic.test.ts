import request from 'supertest';
import app from '../app';  // ajusta si la ruta fuera diferente

describe('Basic API test', () => {
  it('GET / (root) debería responder con 404 o lo que devuelva', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBeGreaterThanOrEqual(200);
    expect(res.statusCode).toBeLessThan(500);
  });
});
