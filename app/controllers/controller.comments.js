const db = require("./../models");
const Comment = db.comments;

exports.create = async (req, res) => {
  const message = await validate(req.body.message);

  if (!message) {
    const comment = {
      own: req.body.username,
      message: req.body.message,
    };
    Comment.create(comment)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(505).send({ message: err.message });
      });
  } else {
    res.status(500).send.json({
      message: "Incumples algunas normas con el vocabulario",
    });
  }
};
