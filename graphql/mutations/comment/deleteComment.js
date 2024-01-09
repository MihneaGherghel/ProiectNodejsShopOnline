const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require("graphql");
const { CommentType } = require("../../types/models");
const deleteCommentResolver = require("../../resolvers/comment/deleteComment");

const deleteComment = {
  type: GraphQLBoolean,
  description: "Delete a comment",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: deleteCommentResolver,
};

module.exports = deleteComment;
