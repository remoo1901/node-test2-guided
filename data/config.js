const knex = require("knex")
const knexfile = require("../knexfile")

module.exports = knex(knexfile[procces.env.NODE_ENV])
