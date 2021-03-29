const db = require("./../models");
const User = db.User;
const bcrypt = require("bcrypt");

exports.create = async (req, res, next) => {
  let password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt);

  const user = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    password,
    role: req.body.role,
  };
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

exports.findOne = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await User.findOne({
    where: { email },
  });
  if (user) {
    const validatePassword = await bcrypt.compare(password, user.password);
    if (validatePassword) {
      res.send(user);
    } else {
      res.status(400).json({ error: "invalid password" });
    }
  } else {
    res.status(404).json({ error: "User not exist" });
  }
};
