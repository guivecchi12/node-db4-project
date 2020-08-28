const db = require("../data/config")

function find(){
    return db("recipes")
        .select("id", "name", "author")
}

module.exports = {
    find,
}