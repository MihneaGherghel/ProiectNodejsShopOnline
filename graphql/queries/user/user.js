const { GraphQLID } = require("graphql");

const { UserType } = require("../../types/models");
const db = require("../../../models/index");

const { checkUser } = require("../../../utils/checkUser");

queryUser = {
  type: UserType,
  description: "A single user",
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_, args, context) => {
    const { id } = args;
    
    const { user } = context.user;
    checkUser(user);

    return await db.User.findByPk(id);
  },
};

module.exports = queryUser;
