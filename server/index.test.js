import App from './index';
import request from 'supertest';

describe('root path', ()=>{
    it('Should return status 200 ', async ()=>{
        const response =  await request(App).get('/');
        expect(response.statusCode).toBe(200);
    })
})