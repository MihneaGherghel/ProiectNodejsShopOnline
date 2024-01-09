const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
} = require("graphql");
const { UserType } = require("../../types/models");
const deleteUserResolver = require("../../resolvers/user/deleteUser");

const deleteUser = {
  type: GraphQLBoolean,
  description: "Delete a user",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: deleteUserResolver,
};

module.exports = deleteUser;
