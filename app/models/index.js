const {
	DB,
	USER,
	PASSWORD,
	HOST,
	dialect,
	pool,
} = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
	host: HOST,
	dialect,
	operatorsAliases: false,
	pool,
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(sequelize, Sequelize);

module.exports = db;