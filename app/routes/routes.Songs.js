const express = require("express");
const router = express.Router();
const { create, findOne, findAll } = require("./../controllers/controllers.Songs.js");

router.get("/All", findOne);
router.post("/registro", create);
router.get("/son/:name", findAll);
module.exports = router;
