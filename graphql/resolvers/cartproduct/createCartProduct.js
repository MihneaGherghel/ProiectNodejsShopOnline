const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCartProductResolver = async (_, args, context) => {
  const { CartId, ProductId, cantity } = args;

  const req = context.req;

  checkUser(req);

  const newCartProduct = await db.CartProduct.create({
    CartId,
    ProductId,
    cantity,
  });

  return newCartProduct;
};

module.exports = createCartProductResolver;
