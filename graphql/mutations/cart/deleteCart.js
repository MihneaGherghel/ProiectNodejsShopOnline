const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require("graphql");
const { CartType } = require("../../types/models");
const deleteCartResolver = require("../../resolvers/cart/deleteCart");

const deleteCart = {
  type: GraphQLBoolean,
  description: "Delete a cart",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: deleteCartResolver,
};

module.exports = deleteCart;
