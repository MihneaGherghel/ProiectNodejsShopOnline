const db=require('../../../models/index')

const deleteProductResolver = async (_, args) => {
    const { id } = args;

    const targetProduct = await db.Product.findByPk(id);

    if(!targetProduct) {
      return null;
    }

    try {
      await targetProduct.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteProductResolver;