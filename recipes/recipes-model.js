const db = require("../data/configs")

function getRecipes(){
    return db("recipe")
        .select("id", "name", "author")
}

function getShoppingList(recipe_id){
    return db("recipe as r")
        .leftJoin("amount as a", "r.id", "a.recipe_id")
        .join("ingredients as i", "i.id", "a.ingredients_id")
        .where("r.id", recipe_id)
        .select("r.name as recipe_name", "i.name as ingredient", "a.quantity")
}

function getInstructions(recipe_id){
    return db("recipe as r")
        .join("instructions as i", "r.id", "i.recipe_id")
        .where("r.id", recipe_id)
        .select("i.step")
}

module.exports = {
    getRecipes, getShoppingList, getInstructions
}