const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');
const {CartType} = require('../../types/models');

const createCartResolver=require('../../resolvers/cart/createCart')

const addCart={
    type: CartType,
    description:'Add a cart',
    args:{
        UserId: {type: new GraphQLNonNull(GraphQLID)},
        status: {type: new GraphQLNonNull(GraphQLString)},
        total_price:{ type: new GraphQLNonNull(GraphQLFloat)},
    },
    resolve:createCartResolver
}

module.exports=addCart