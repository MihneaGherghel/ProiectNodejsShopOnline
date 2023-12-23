const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateCartProductResolver = async (_, args, context) => {
  const { CartId, ProductId, cantity } = args;

  const req = context.req;

  checkUser(req);

  const targetCartProduct = await db.CartProduct.findOne({
    where: {
      CartId: CartId,
      ProductId: ProductId,
    },
  });
  if (!targetCartProduct) {
    return null;
  }
  const updatedCartProduct = await targetCartProduct.update({
    cantity,
  });
  return updatedCartProduct;
};

module.exports = updateCartProductResolver;
