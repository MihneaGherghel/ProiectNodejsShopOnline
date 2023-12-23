const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCartResolver = async (_, args, context) => {
  const { UserId, status, total_price } = args;

  const req = context.req;

  checkUser(req);

  const newCart = await db.Cart.create({
    UserId,
    status,
    total_price,
  });

  return newCart;
};

module.exports = createCartResolver;
