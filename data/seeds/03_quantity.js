exports.seed = async function(knex) {
	await knex("amount").insert([
		{ recipe_id: 1, ingredients_id: 1, quantity: "3 cups" },
        { recipe_id: 1, ingredients_id: 2, quantity: "1 cup" },
        { recipe_id: 1, ingredients_id: 3, quantity: "1 cup" },
        { recipe_id: 1, ingredients_id: 4, quantity: "1 tsp" },
        { recipe_id: 1, ingredients_id: 5, quantity: "1 tsp" },
        { recipe_id: 1, ingredients_id: 6, quantity: "1 cup" },
        { recipe_id: 1, ingredients_id: 7, quantity: "1 tsp" },
        { recipe_id: 1, ingredients_id: 8, quantity: "1 bag" },
        { recipe_id: 2, ingredients_id: 1, quantity: "3 cups" },
        { recipe_id: 2, ingredients_id: 3, quantity: "1 cup" },
        { recipe_id: 2, ingredients_id: 4, quantity: "1 tsp" },
        { recipe_id: 2, ingredients_id: 5, quantity: "1 tsp" },
        { recipe_id: 2, ingredients_id: 6, quantity: "1 cup" },
        { recipe_id: 2, ingredients_id: 9, quantity: "1 tbsp" },
        { recipe_id: 2, ingredients_id: 10, quantity: "1/2 cup" },
        { recipe_id: 2, ingredients_id: 11, quantity: "1" },

	])
}