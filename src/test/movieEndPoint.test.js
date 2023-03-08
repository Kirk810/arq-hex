const request = require('supertest');
const app = require('../server/index');

describe('Post Movie', () => {
    it('should create a new movie', async () => {
        const res = await request(app).post('/api/v1/movies/').send({
            Title: 'Matrix',
            Poster: 'https://res.cloudinary.com/dvdoak5et/image/upload/v1678189222/moviesAuthDB/zsro8g3btq6h53yzwcx0.jpg',
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body.status).toEqual('Success');
    });
});