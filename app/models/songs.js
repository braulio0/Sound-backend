module.exports = (sequelize, Sequelize) => {
	const Songs= sequelize.define("songs", {
		name: {
			type: Sequelize.STRING,
		},
		artist:{
			type: Sequelize.STRING,
		},
		genre: {
			type: Sequelize.STRING,
		},
		energy: {
			type: Sequelize.INTEGER,
		},
		bpm: {
			type: Sequelize.INTEGER,
		},
		popularity: {
			type: Sequelize.INTEGER,
		},
	});
	return Songs;
};
