const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');

const {UserType}=require('../../types/models')
const db=require('../../../models/index')


queryUser={
    type: UserType,
    description:'A single user',
    args:{
            id:{type:GraphQLID}
    },
    resolve:async (parent,args)=>{
        const {id}=args
        return await db.User.findByPk(id);
    }
}

module.exports=queryUser