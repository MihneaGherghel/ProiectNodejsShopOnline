const { 
    GraphQLString,
    GraphQLNonNull,
    GraphQLID,
    GraphQLBoolean,
} = require('graphql');
const {ProductType} = require('../../types/models');
const deleteProductResolver=require('../../resolvers/product/deleteProduct')

const deleteProduct={
    type:GraphQLBoolean,
    description:'Delete a product',
    args:{
            id: {type:new GraphQLNonNull(GraphQLID)}
    },
    resolve:deleteProductResolver
}

module.exports=deleteProduct