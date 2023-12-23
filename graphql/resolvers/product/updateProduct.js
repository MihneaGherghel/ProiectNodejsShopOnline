const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateProductResolver = async (_, args) => {
  const { id, name, photo_path, description, price } = args;

  const { user } = context.user;

  checkUser(user);

  const targetProduct = await db.Product.findByPk(id);

  if (!targetProduct) {
    return null;
  }

  const updatedProduct = await targetProduct.update({
    id,
    name,
    photo_path,
    description,
    price,
  });

  return updatedProduct;
};

module.exports = updateProductResolver;
