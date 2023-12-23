const { JWT_SECRET } = require("../../config/constants");
const db = require("../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginResolver = async (_, args) => {
  const { email, password } = args;
  const user = await db.User.findOne({
    where: {
      email,
    },
  });

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if (passwordIsValid) {
    return {
      token: jwt.sign({ userId: user.id }, JWT_SECRET),
    };
  }

  throw new Error("Invalid login credentials");
};

module.exports = loginResolver;
