const db = require("./../models");
const Comment = db.Comment;

exports.create = async (req, res) => {
  //const message = await validate(req.body.message);

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
};
