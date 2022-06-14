process.env.NODE_ENV = 'test';

const request = require('supertest');
const server = require('../app.js');

const config = require('../knexfile.js')[process.env.NODE_ENV];
const db = require('knex')(config);

beforeEach(async (done) => {
    await db.migrate.rollback(config);
    await db.migrate.latest();
    await db.seed.run();
    done();
});

afterEach(async () => {
    await db.migrate.rollback(config);
});

test('GET /api/items return all items', async () => {
    const response = await request(server).get('/api/items');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toBe('application/json; charset=utf-8');
    expect(Array.isArray(response.body.items)).toBe(true);
    const { body: { items } } = response;
    expect(items.length).toBe(3);
    expect(items[0]).toHaveProperty('title');
    expect(items[0].title).toBe('SpaceX Dragon');
});

test('POST /api/items', async () => {
    const newItem = {
        title: 'Sputnik X34',
        description: 'Oldies but goodies'
    };
    const response = await request(server).post('/api/items').send(newItem);
    const { item } = response.body;
    expect(response.statusCode).toBe(200);
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('description');
    expect(item.title).toBe(newItem.title);
    expect(item.description).toBe(newItem.description);
});