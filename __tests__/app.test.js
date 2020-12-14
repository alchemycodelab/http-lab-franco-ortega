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


});
