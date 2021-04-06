const express = require("express");
const router = express.Router();
const {
	create,
	findOne,
} = require("./../controllers/controllers.User.js");

router.post("/registro", create);
module.exports = router;
