const { GraphQLID } = require("graphql");

const { ProductType } = require("../../types/models");
const db = require("../../../models/index");

const checkUser = require("../../../utils/checkUser");

const productQuery = {
  type: ProductType,
  description: "A single product",
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_, args, context) => {
    const { id } = args;

    const req = context.req;
    checkUser(req);

    return await db.Product.findByPk(id);
  },
};

module.exports = productQuery;
