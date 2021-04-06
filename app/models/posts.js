module.exports = (sequelize, Sequelize) => {
	const Posts= sequelize.define("pots", {
		id: {
			type: Sequelize.INTEGER,
            primaryKey: true,
		},
		own:{
			type: Sequelize.STRING,
            
		},
		text: {
			type: Sequelize.STRING,
		},
	});
	return Posts;
};