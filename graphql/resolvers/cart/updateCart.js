const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateCartResolver = async (_, args) => {
  const { id, UserId, status, total_price } = args;

  const { user } = context.user;

  checkUser(user);

  const targetCart = await db.Cart.findByPk(id);

  if (!targetCart) {
    return null;
  }

  const updatedCart = await targetCart.update({
    UserId,
    status,
    total_price,
  });

  return updatedCart;
};

module.exports = updateCartResolver;
