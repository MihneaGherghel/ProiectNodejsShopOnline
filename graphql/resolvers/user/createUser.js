const db = require("../../../models/index");
const bcrypt = require("bcrypt");
const checkUser = require("../../../utils/checkUser");

const createUserResolver = async (_, args, context) => {
  const { username, email, password, age, city, address, postal_code } = args;

  const req = context.req;
  checkUser(req);

  //const hash = await bcrypt.hash(password, 10);

  const newUser = await db.User.create({
    username,
    email,
    password, //TODO Replace with hash
    age,
    city,
    address,
    postal_code,
  });

  return newUser;
};

module.exports = createUserResolver;
