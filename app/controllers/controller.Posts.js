const db = require("./../models");
const { validate } = require("./controller.encrypt");
const Posts = db.Posts;

exports.create = async (req, res) => {
 const message= await validate(req.bodty.text)
 if(!message){
    const posts = {
        id: req.body.id,
        own: req.body.own,
        text: req.body.text,
      };
      Posts.create(posts)
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || " Some erros ocurred while creating a post",
          });
        });
 }else{
    res.status(500).send({
        message:
          err.message || " Incumples algunas reglas en el vocabulario",
    });
 }
 
};