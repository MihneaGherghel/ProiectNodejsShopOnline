const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteCartResolver = async (_, args, context) => {
  const { id } = args;

  const req = context.req;

  checkUser(req);

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
