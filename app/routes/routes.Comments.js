const express = require("express");
const router = express.Router();
const { create, findAll } = require("./../controllers/controllers.Comments.js");

router.post("/registro", create);
router.get("/comments/:postId", findAll);
module.exports = router;
