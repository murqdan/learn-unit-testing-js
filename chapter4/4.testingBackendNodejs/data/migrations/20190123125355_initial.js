exports.up = (knex) =>
  knex.schema.createTable('items', (t) => {
    t.increments('id').primary();
    t.string('title').notNullable();
    t.string('description').notNullable();
    t.timestamps(false, true);
  });

exports.down = (knex) => knex.schema.dropTableIfExists('items');
