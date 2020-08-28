exports.seed = async function(knex) {
	await knex("instructions").insert([
        { recipe_id: 1,  step: "Grab a bowl" },
        { recipe_id: 1,  step: "add Four to bowl" },
        { recipe_id: 1,  step: "add Brown Sugar to bowl" },
        { recipe_id: 1,  step: "add White to bowl" },
        { recipe_id: 1,  step: "add Salt to bowl" },
        { recipe_id: 1,  step: "add Baking Soda to bowl" },
        { recipe_id: 1,  step: "add Butter to bowl" },
        { recipe_id: 1,  step: "add vanilla to bowl" },
        { recipe_id: 1,  step: "add Chocolate Chip to bowl" },
        { recipe_id: 1,  step: "Mix bowl and add to Oven at 350F for 8 - 12min" },
        { recipe_id: 1,  step: "Enjoy your cookies" },
        { recipe_id: 2,  step: "add sugar to bowl" },
        { recipe_id: 2,  step: "add White to bowl" },
        { recipe_id: 2,  step: "add everything else to bowl" },
        { recipe_id: 2,  step: "set oven temp to 350F" },
        { recipe_id: 2,  step: "throw in oven for 15-20min" },
	])
}