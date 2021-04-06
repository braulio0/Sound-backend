const express = require('express');
const router = express.Router();

const {
	create,
} = require("./../controllers/controllers.Components");

router.post("/registro", create);

module.exports = router;
