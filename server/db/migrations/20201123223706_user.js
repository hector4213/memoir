const tableNames = require('../../constants/tableNames')

exports.up = async (knex) => {
  await Promise.all([
    knex.schema.createTable(tableNames.users, (table) => {
      table.increments().notNullable()
      table.string('email').notNullable().unique()
      table.string('username').notNullable().unique()
      table.string('password', 127).notNullable()
    }),
  ])
}

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.user,
      tableNames.story,
      tableNames.entry,
      tableNames.format,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  )
}
