const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createProductResolver = async (_, args, context) => {
  const { name, photo_path, description, price } = args;

  const req = context.req;

  checkUser(req);

  const newProduct = await db.Product.create({
    name,
    photo_path,
    description,
    price,
  });

  return newProduct;
};

module.exports = createProductResolver;
