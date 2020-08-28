exports.seed = async function(knex) {
	await knex("recipe").insert([   
		{ name: "Chocolate Chip Cookies", author: "Betty Crocker" },
		{ name: "Orange Rolls", author: "Rachel Vecchi" },
	])
}