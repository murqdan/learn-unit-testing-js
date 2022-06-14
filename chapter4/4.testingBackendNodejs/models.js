const env = process.env.NODE_ENV || 'development';
const config = require('./knexfile.js')[env];
const db = require('knex')(config);

module.exports = {
  getItems: () => db('items').select()
};
