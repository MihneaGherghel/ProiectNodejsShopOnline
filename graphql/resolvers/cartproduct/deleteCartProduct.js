const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteCartProductResolver = async (_, args, context) => {
  const { CartId, ProductId } = args;

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

  try {
    await targetCartProduct.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteCartProductResolver;
