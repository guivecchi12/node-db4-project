exports.seed = async function(knex) {
	await knex("ingredients").insert([
		{ name: "Flour" },
		{ name: "Brown sugar" },
		{ name: "White sugar" },
		{ name: "Salt" },
		{ name: "Baking powder" },
		{ name: "Butter" },
		{ name: "Vanilla" },
		{ name: "Chocolate Chip" },
		{ name: "Yeast" },
		{ name: "Water" },
        { name: "Orange" },
	])
}