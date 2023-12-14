const { 
    GraphQLNonNull,
    GraphQLID,
} = require('graphql');

const {CartType} =require('../../types/models')
const db=require('../../../models/index')

const cartQuery={
    type: CartType,
    description:'A single cart',
    args:{
            id:{type: new GraphQLNonNull(GraphQLID)}
    },
    resolve:async (parent,args)=>{
        const {id}=args
        return await db.Cart.findByPk(id);
    }
}

module.exports=cartQuery