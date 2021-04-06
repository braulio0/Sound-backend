const db = require("./../models");
const User = db.User;
const { encrypt, validate } = require("./controllers.encrypt");

exports.create = async (req, res) => {
  const password = await encrypt(req.body.password);
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
  let validatePassword;

  const user = await User.findOne({
    where: { email },
  });
  !user
    ? res.status(404).json({ error: "User does not exist" })
    : ((validatePassword = await validate(password, user.password)),
      !validatePassword
        ? res.status(400).json({ error: "invalid password" })
        : res.send(user));
};
