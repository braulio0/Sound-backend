
const db = require("./../models");
const User = db.User;


exports.create = async (req, res, next) => {
  
    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        age:req.body.age,
        password:req.body.password,
        role:req.body.role,
    };
    //Create Login
    
    //Create User
  User.create(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || " Some erros ocurred while creating Solicitante",
        });
      });
  
};