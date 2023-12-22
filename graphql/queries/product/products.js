
const {
    GraphQLList
} = require('graphql');

const {ProductType}=require('../../types/models')
const db=require('../../../models/index')


const queryProducts={
    type: new GraphQLList(ProductType),
    description:'List of all products',
    resolve: async () => {
        return await db.Product.findAll()
    }
}

module.exports=queryProducts