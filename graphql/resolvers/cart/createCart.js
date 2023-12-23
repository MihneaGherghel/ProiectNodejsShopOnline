const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCartResolver = async (_, args) => {
  const { UserId, status, total_price } = args;

  const { user } = context.user;

  checkUser(user);

  const newCart = await db.Cart.create({
    UserId,
    status,
    total_price,
  });

  return newCart;
};

module.exports = createCartResolver;
