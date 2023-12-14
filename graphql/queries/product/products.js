const products=[
    {id:1,name:'Prod1',photo_path:'link',description:'descriere', price:50},
    {id:2,name:'Prod2',photo_path:'link',description:'descriere',price:50},
    {id:3,name:'Prod3',photo_path:'link',description:'descriere',price:50}
]
const {
    GraphQLList
} = require('graphql');

const {ProductType}=require('../../types/models')
const db=require('../../../models/index')


const productsQuery={
    type: new GraphQLList(ProductType),
    description:'List of all products',
    resolve: async () => {
        return await db.Product.findAll()
    }
}

module.exports=productsQuery