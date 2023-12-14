const db=require('../../../models/index')

const updateProductResolver = async (_, args) => {
    const { id,name,photo_path,description,price } = args;

    const targetProduct = await db.Product.findByPk(id);

    if(!targetProduct) {
      return null;
    }

    const updatedProduct = await targetProduct.update({
      id,
      name,
      photo_path,
      description,
      price
    });

    return updatedProduct;
}

module.exports = updateProductResolver;