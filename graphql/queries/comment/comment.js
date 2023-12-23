const { GraphQLID } = require("graphql");

const { CommentType } = require("../../types/models");
const db = require("../../../models/index");

const queryComment = {
  type: CommentType,
  desciption: "A single comment",
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_, args, context) => {
    const { id } = args;
    
    const req = context.req;
    checkUser(req);

    return await db.Comment.findByPk(id);
  },
};

module.exports = queryComment;
