module.exports = (sequelize, Sequelize) => {
	const Posts= sequelize.define("posts", {
		own:{
			type: Sequelize.STRING,
            
		},
		text: {
			type: Sequelize.STRING,
		},
	});
	return Posts;
};
