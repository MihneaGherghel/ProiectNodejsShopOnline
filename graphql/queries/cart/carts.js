const { GraphQLList } = require("graphql");

const { CartType } = require("../../types/models");
const db = require("../../../models/index");

const checkUser = require("../../../utils/checkUser");

const queryCarts = {
  type: new GraphQLList(CartType),
  description: "List of all carts",
  resolve: async (_, args, context) => {
    const { user } = context.user;
    checkUser(user);

    return await db.Cart.findAll();
  },
};

module.exports = queryCarts;
