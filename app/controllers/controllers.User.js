
const db = require("./../models");
const User = db.User;
const bcrypt = require('bcrypt');

exports.create = async (req, res, next) => {
 let password = req.body.password;
const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

    const user = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        age:req.body.age,
        password,
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
