const db=require('../../../models/index')

const updateCartResolver = async (_, args) => {
    const { id,UserId,status,total_price } = args;

    const targetCart = await db.Cart.findByPk(id);

    if(!targetCart) {
      return null;
    }

    const updatedCart = await targetCart.update({
      UserId,
      status,
      total_price
    });

    return updatedCart;
}

module.exports = updateCartResolver;