const { JWT_SECRET } = require("../../../config/config.json");
const db = require("../../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginResolver = async (_, args, context) => {
  const { email, password } = args;
  const user = await db.User.findOne({
    where: {
      email,
      password, //TODO replace with checking password hash
    },
  });

  //const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (user) {
    return {
      token: jwt.sign({ userId: user.id }, JWT_SECRET),
    };
  }

  throw new Error("Invalid login credentials");
};

module.exports = loginResolver;
