const db=require('../../../models/index')

const deleteCartResolver = async (_, args) => {
    const { id } = args;

    const targetCart = await db.Cart.findByPk(id);

    if(!targetCart) {
      return null;
    }

    try {
      await targetCart.destroy();

      return true;
    } catch (e) {
      throw new Error(e);
    }
  }

module.exports = deleteCartResolver;