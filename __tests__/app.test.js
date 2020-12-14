const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
//   it('sample fake test', () => {
//     expect(true).toEqual(true);
//   });

  it('GET hi from /', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
  });

  it('POST to /echo responds with status code 200 and plain text with the request body', async() => {
    const response = await request(app)
      .post('/echo');

    expect(response.text).toEqual({
      status: 200,
      body: 'hi',
      contentType: 'text/plain'
    });
  });


});
