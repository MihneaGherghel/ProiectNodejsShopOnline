const db=require('../../../models/index')

const createCartResolver = async (_, args) => {
    const { UserId,status,total_price } = args;
    const newCart = await db.Cart.create({
      UserId,
      status,
      total_price
    });
  
    return newCart;
}

module.exports = createCartResolver;

