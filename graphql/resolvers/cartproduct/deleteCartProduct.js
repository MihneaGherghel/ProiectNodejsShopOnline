const db=require('../../../models/index')

const deleteCartProductResolver = async (_, args) => {
    const { id } = args;

    const targetCartProduct = await db.CartProduct.findByPk(id);

    if(!targetCartProduct) {
      return null;
    }

    try {
      await targetCartProduct.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteCartProductResolver;