const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
} = require("graphql");
const { ProductType } = require("../../types/models");
const updateProductResolver = require("../../resolvers/product/updateProduct");

const updateProduct = {
  type: ProductType,
  description: "Update a product",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    photo_path: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
  },
  resolve: updateProductResolver,
};

module.exports = updateProduct;
