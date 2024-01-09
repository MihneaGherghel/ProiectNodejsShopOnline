const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLFloat,
} = require("graphql");
const { ProductType } = require("../../types/models");
const createProductResolver = require("../../resolvers/product/createProduct");

const addProduct = {
  type: ProductType,
  description: "Add a product",
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    photo_path: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLFloat) },
  },
  resolve: createProductResolver,
};

module.exports = addProduct;
