
exports.up = async function(knex) {
    await knex.schema.createTable("recipe", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("author").notNull()
    })

    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })

    await knex.schema.createTable("amount", (table) => {
        table.integer("recipe_id").notNull().references("id").inTable("recipe")
        table.integer("ingredients_id").notNull().references("id").inTable("ingredients")
        table.text("quantity").notNull()
        table.primary(["recipe_id", "ingredients_id"])
    })

    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.integer("recipe_id").notNull().references("id").inTable("recipe")
        table.text("step").notNull()
    })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("instructions")
    await knex.schema.dropTableIfExists("amount")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipe")
};
