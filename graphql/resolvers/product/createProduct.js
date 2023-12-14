const db=require('../../../models/index')

const createProductResolver = async (_, args) => {
    const { name,photo_path,description,price } = args;
    const newProduct = await db.Product.create({
      name,
      photo_path,
      description,
      price
    });
  
    return newProduct;
}

module.exports = createProductResolver;