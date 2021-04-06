const db = require("../models");
const { validate } = require("./controllers.encrypt");
const Posts = db.Posts;

exports.create = async (req, res) => {
 const message= await validate(req.body.text)
 if(!message){
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