const { 
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');
const {CartProductType} = require('../../types/models');
const updateCartProductResolver=require('../../resolvers/cartproduct/uptdateCartProduct')

const updateCartProduct={
    type: CartProductType,
    description:'Update a cart-product',
    args:{
        id:{ type: new GraphQLNonNull(GraphQLID)},
        CartId:{ type: new GraphQLNonNull(GraphQLID)},
        ProductId:{ type: new GraphQLNonNull(GraphQLID)},
        cantity:{ type: new GraphQLNonNull(GraphQLInt)}
    },
    resolve:updateCartProductResolver
}

module.exports=updateCartProduct