const db=require('../../../models/index')

const createCartProductResolver = async (_, args) => {
    const { CartId,ProductId,cantity } = args;
    const newCartProduct = await db.CartProduct.create({
      CartId,
      ProductId,
      cantity
    });
  
    return newCartProduct;
}

module.exports = createCartProductResolver;