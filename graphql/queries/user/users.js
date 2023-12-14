const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');

const {UserType}=require('../../types/models')
const db=require('../../../models/index')

const queryUsers={
    type: new GraphQLList(UserType),
    resolve: async () => {
        return await db.User.findAll()
    }
}

module.exports=queryUsers