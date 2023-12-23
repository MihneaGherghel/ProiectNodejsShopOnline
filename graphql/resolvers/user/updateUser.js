const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateUserResolver = async (_, args) => {
  const { id, username, email, password, age, city, address, postal_code } =
    args;

  const { user } = context.user;

  checkUser(user);

  const targetUser = await db.User.findByPk(id);
  if (!targetUser) {
    return null;
  }
  const updatedUser = await targetUser.update({
    username,
    email,
    password,
    age,
    city,
    address,
    postal_code,
  });
  return updatedUser;
};

module.exports = updateUserResolver;
