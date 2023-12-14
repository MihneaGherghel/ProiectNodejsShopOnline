const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} = require('graphql');
const {UserType} = require('../../types/models');
const createUserResolver=require('../../resolvers/user/createUser')

const addUser={
    type: UserType,
    description:'Add a user',
    args:{
            username: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
            age:{ type: new GraphQLNonNull(GraphQLInt)},
            city: {type: new GraphQLNonNull(GraphQLString)},
            address: {type: new GraphQLNonNull(GraphQLString)},
            postal_code: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve:createUserResolver
}

module.exports=addUser