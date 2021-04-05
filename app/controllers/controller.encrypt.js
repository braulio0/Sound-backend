const bcrypt = require("bcrypt");

const encrypt = async (password) => {
  const salt = await bcrypt.genSalt(10);
  let word = await bcrypt.hash(password, salt);
  return word;
};

const validate = async (password, secret) =>
  (validatePassword = await bcrypt.compare(password, secret));

exports.encrypt = encrypt;
exports.validate = validate;
