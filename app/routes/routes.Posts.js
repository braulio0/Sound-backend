const express = require("express");
const router = express.Router();
const {
	create,
	findAll,
} = require("./../controllers/controllers.Posts.js");

router.post("/registro", create);
router.get("/post/:own", findAll);
module.exports = router;
