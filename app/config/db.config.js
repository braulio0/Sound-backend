module.exports = {

	HOST : "localhost",
	USER: "postgres",
	PASSWORD: "",
	DB: "spotify",
	dialect: "postgres",
	pool:{
		max: 5,
		min: 0,
		acquire:3000,
		idle:1000,

	}


};
