const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");
const { CartType } = require("../../types/models");
const updateCartResolver = require("../../resolvers/cart/updateCart");

const updateCart = {
  type: CartType,
  description: "Update a cart",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    UserId: { type: new GraphQLNonNull(GraphQLID) },
    status: { type: new GraphQLNonNull(GraphQLString) },
    total_price: { type: new GraphQLNonNull(GraphQLFloat) },
  },
  resolve: updateCartResolver,
};

module.exports = updateCart;
