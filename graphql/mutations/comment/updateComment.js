const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt,
} = require("graphql");
const { CommentType } = require("../../types/models");
const updateCommentResolver = require("../../resolvers/comment/updateComment");

const updateComment = {
  type: CommentType,
  description: "Update a comment",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    ProductId: { type: new GraphQLNonNull(GraphQLID) },
    UserId: { type: new GraphQLNonNull(GraphQLID) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
    stars: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: updateCommentResolver,
};

module.exports = updateComment;
