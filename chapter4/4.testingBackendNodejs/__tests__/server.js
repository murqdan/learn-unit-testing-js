process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('../app.js');
const { getItems } = require('../models.js');
const config = require('../knexfile.js')[process.env.NODE_ENV];
const db = require('knex')(config);

beforeEach(async (done) => {
    await db.migrate.rollback(config);
    await db.migrate.latest();
    await db.seed.run();
    done();
})

afterEach(async () => {
    await db.migrate.rollback(config);
})

test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toEqual('text/html');
})

test('GET items', async () => {
    const items = await getItems();
    expect(items[0].title).toBe('SpaceX Dragon');
    expect(items.length).toBe(3);
})