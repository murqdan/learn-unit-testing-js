// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqilte',
    connection: {
      filename: './prod.sqlite3'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/prod'
    },
    useNullAsDefault: true
  }
};
