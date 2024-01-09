const { GraphQLInt, GraphQLNonNull, GraphQLID } = require("graphql");
const { CartProductType } = require("../../types/models");
const createCartProductResolver = require("../../resolvers/cartproduct/createCartProduct");

const addCartProduct = {
  type: CartProductType,
  description: "Add a cart-product",
  args: {
    CartId: { type: new GraphQLNonNull(GraphQLID) },
    ProductId: { type: new GraphQLNonNull(GraphQLID) },
    cantity: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: createCartProductResolver,
};

module.exports = addCartProduct;
