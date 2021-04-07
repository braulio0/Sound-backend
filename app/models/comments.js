module.exports = (sequelize, Sequelize) => {
	const Comment = sequelize.define("comment", {
		own: {
			type: Sequelize.STRING,
		},
		message: {
			type: Sequelize.STRING,
		},
	});
	return Comment;
};
