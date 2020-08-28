
exports.up = async function(knex) {
  await knex.schema.createTable("recipe", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text("author").notNull()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe")
};
