const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
} = require('graphql');
const {CartProductType} = require('../../types/models');
const deleteCartProductResolver=require('../../resolvers/cartproduct/deleteCartProduct')

const deleteCartProduct={
    type:GraphQLBoolean,
    description:'Delete a cart-product',
    args:{
        CartId: {type:new GraphQLNonNull(GraphQLID)},
        ProductId: {type:new GraphQLNonNull(GraphQLID)}
    },
    resolve:deleteCartProductResolver
}

module.exports=deleteCartProduct