const { 
    GraphQLNonNull,
    GraphQLID,
    GraphQLList
} = require('graphql');

const {ProductType}=require('../../types/models')
const db=require('../../../models/index')

const productQuery={
    type: ProductType,
    description:'A single product',
    args:{
            id:{type:GraphQLID}
    },
    resolve: async (parent,args)=>{
        const {id}=args
        return await db.Product.findByPk(id);
    }
}

module.exports=productQuery