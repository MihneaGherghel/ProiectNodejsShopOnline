const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');

const {CommentType} =require('../../types/models')
const db=require('../../../models/index')


const queryComments={
    type: new GraphQLList(CommentType),
    description:'List of all comments',
    resolve: async () => {
        return await db.Comments.findAll()
    }
}

module.exports=queryComments