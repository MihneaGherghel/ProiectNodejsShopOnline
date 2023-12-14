const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} = require('graphql');
const {CommentType} = require('../../types/models');
const createCommentResolver=require('../../resolvers/comment/createComment')

const addComment={
    type: CommentType,
    description:'Add a comment',
    args:{
        ProductId: {type:new GraphQLNonNull(GraphQLID)},
        UserId: {type:new GraphQLNonNull(GraphQLID)},
        comment:{type: new GraphQLNonNull(GraphQLString)},
        stars:{type: new GraphQLNonNull(GraphQLInt)},
    },
    resolve:createCommentResolver
}

module.exports=addComment
