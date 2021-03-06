const db = require("./../models");
const Comment = db.Comment;
const { banWords } = require("./controllers.BanWords");

exports.create = async (req, res) => {
  const words = await banWords(req.body.message);
  if (!words) {
    const comment = {
      own: req.body.own,
      message: req.body.message,
      postId: req.body.postId,
    };
    Comment.create(comment)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || " Some erros ocurred while creating a post",
        });
      });
  } else {
    res.status(404).send({
      message: "You are banned",
      BanWords: words,
    });
  }
};
exports.findAll = async (req, res) => {
  const postId = req.params.postId;

  Comment.findAll({ where: { postId: postId } })
    .then((comment) => {
      res.send(comment);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
