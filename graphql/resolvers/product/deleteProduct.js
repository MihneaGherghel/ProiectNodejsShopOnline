const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteProductResolver = async (_, args, context) => {
  const { id } = args;

  const req = context.req;

  checkUser(req);

  const targetProduct = await db.Product.findByPk(id);

  if (!targetProduct) {
    return null;
  }

  try {
    await targetProduct.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteProductResolver;
