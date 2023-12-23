const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCartProductResolver = async (_, args) => {
  const { CartId, ProductId, cantity } = args;

  const { user } = context.user;

  checkUser(user);

  const newCartProduct = await db.CartProduct.create({
    CartId,
    ProductId,
    cantity,
  });

  return newCartProduct;
};

module.exports = createCartProductResolver;
