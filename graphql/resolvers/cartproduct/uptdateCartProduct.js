const db=require('../../../models/index')

const updateCartProductResolver = async (_, args) => {
    const { CartId,ProductId,cantity } = args;
    const targetCartProduct = await db.CartProduct.findOne({
      where:{
        CartId:CartId,
        ProductId:ProductId
      }
    });
    if(!targetCartProduct) {
      return null;
    }
    const updatedCartProduct = await targetCartProduct.update({
      cantity
    });
    return updatedCartProduct;
}

module.exports = updateCartProductResolver;