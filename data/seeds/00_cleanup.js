exports.seed = async function(knex) {
	await knex("instructions").truncate()
	await knex("amount").truncate()
	await knex("ingredients").truncate()
	await knex("recipe").truncate()
}