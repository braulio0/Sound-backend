module.exports = (sequelize, Sequelize) => {
	const Comments = sequelize.define("comments", {
		own: {
			type: Sequelize.STRING,
		},
		message: {
			type: Sequelize.STRING,
		},
	});
	return Comments;
};
