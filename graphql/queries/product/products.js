const { GraphQLList } = require("graphql");

const { ProductType } = require("../../types/models");
const db = require("../../../models/index");

const checkUser = require("../../../utils/checkUser");

const queryProducts = {
  type: new GraphQLList(ProductType),
  description: "List of all products",
  resolve: async (_, args, context) => {
    const { user } = context.user;
    checkUser(user);

    return await db.Product.findAll();
  },
};

module.exports = queryProducts;
