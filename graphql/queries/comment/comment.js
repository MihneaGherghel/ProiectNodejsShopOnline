const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLInt
} = require('graphql');

const {CommentType}=require('../../types/models')
const db=require('../../../models/index')

const queryComment={
    type:CommentType,
    desciption:'A single comment',
    args:{
            id:{type:GraphQLID}
    },
    resolve: async (parent,args)=>{
        const {id}=args
        return await db.Comment.findByPk(id);
    }
}

module.exports=queryComment