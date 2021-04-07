const db = require("../models");
const { banWords } = require("./controllers.BanWords");
const Posts = db.Posts;

exports.create = async (req, res) => {
  const message = await banWords(req.body.text);
  if (!message) {
    const posts = {
      own: req.body.own,
      text: req.body.text,
    };
    Posts.create(posts)
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
      error: "you say this",
      BanWords: message,
    });
  }
};
