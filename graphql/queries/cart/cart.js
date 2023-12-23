const { GraphQLNonNull, GraphQLID } = require("graphql");

const { CartType } = require("../../types/models");
const db = require("../../../models/index");

const checkUser = require("../../../utils/checkUser");

const cartQuery = {
  type: CartType,
  description: "A single cart",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: async (_, args, context) => {
    const { id } = args;

    const req = context.req;
    checkUser(req);

    return await db.Cart.findByPk(id);
  },
};

module.exports = cartQuery;
