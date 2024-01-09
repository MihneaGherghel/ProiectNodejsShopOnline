const { GraphQLList } = require("graphql");

const { CommentType } = require("../../types/models");
const db = require("../../../models/index");

const checkUser = require("../../../utils/checkUser");

const queryComments = {
  type: new GraphQLList(CommentType),
  description: "List of all comments",
  resolve: async (_, args, context) => {
    const req = context.req;
    checkUser(req);

    return await db.Comment.findAll();
  },
};

module.exports = queryComments;
