exports.up = (knex) =>
  knex.schema.table('items', (t) => {
    t.string('imgurl');
  });

exports.down = (knex, Promise) => {};
