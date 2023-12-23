const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createProductResolver = async (_, args) => {
  const { name, photo_path, description, price } = args;

  const { user } = context.user;

  checkUser(user);

  const newProduct = await db.Product.create({
    name,
    photo_path,
    description,
    price,
  });

  return newProduct;
};

module.exports = createProductResolver;
