const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} = require('graphql');
const {UserType} = require('../../types/models');
const updateUserResolver=require('../../resolvers/user/updateUser')

const updateUser={
    type: UserType,
    description:'Update a user',
    args:{
            id:{ type: new GraphQLNonNull(GraphQLID)},
            username: {type: new GraphQLNonNull(GraphQLString)},
            email: {type: new GraphQLNonNull(GraphQLString)},
            password: {type: new GraphQLNonNull(GraphQLString)},
            age:{ type: new GraphQLNonNull(GraphQLInt)},
            city: {type: new GraphQLNonNull(GraphQLString)},
            address: {type: new GraphQLNonNull(GraphQLString)},
            postal_code: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve:updateUserResolver
}

module.exports=updateUser