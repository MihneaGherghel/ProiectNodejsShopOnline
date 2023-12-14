const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');

const {CartType} =require('../../types/models')
const db=require('../../../models/index')


const queryCarts={
    type: new GraphQLList(CartType),
    description:'List of all carts',
    resolve: async () => {
        return await db.Cart.findAll()
    }
}

module.exports=queryCarts