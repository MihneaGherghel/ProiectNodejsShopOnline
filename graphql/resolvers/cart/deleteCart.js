const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteCartResolver = async (_, args) => {
  const { id } = args;

  const { user } = context.user;

  checkUser(user);

  const targetCart = await db.Cart.findByPk(id);

  if (!targetCart) {
    return null;
  }

  try {
    await targetCart.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteCartResolver;
