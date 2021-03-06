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
	define: {
		timestamps: false,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./user.js")(sequelize, Sequelize);
db.Songs = require("./songs.js")(sequelize, Sequelize);
db.Posts = require("./posts.js")(sequelize, Sequelize);
db.Comment = require("./comments.js")(sequelize, Sequelize);

db.Posts.hasMany(db.Comment, { as: "comment" });
db.Comment.belongsTo(db.Posts, {
	foreignKey: "postsid",
	as: "posts",
});
module.exports = db;
