const request = require('supertest');
const app = require('../lib/app');
const createResponse = require('../lib/utils/createResponse');
const parseRequest = require('../lib/utils/parseRequest');

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
      .post('/echo')
      .send('hi');

    expect(response.text).toEqual('hi');
  });

  it('GET html with an h1 and the word red from /red', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>red</h1>');
  });



});
