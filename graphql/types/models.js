const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = require('graphql');

const db=require('../../models/index')


const CartType= new GraphQLObjectType({
    name:'Cart',
    description:'This represents a cart',
    fields: () =>({
        id:{ type:GraphQLID},
        status: {type:GraphQLString},
        total_price:{ type:GraphQLFloat},
        products:{
            type:new GraphQLList(ProductType),
            resolve:(cart)=>{
                return cart.getProduct()
            }
        },
        user:{
            type:UserType,
            resolve: (cart)=>{
                return cart.getUser();
            }
        }
    })
})

const CommentType= new GraphQLObjectType({
    name:'Comment',
    description:'This represents a comment',
    fields: () =>({
        id:{ type:GraphQLID},
        comment:{type: GraphQLString},
        stars:{type: GraphQLInt},
        product:{
            type:ProductType,
            resolve:(comment)=>{
                return comment.getProduct();
            }
        },
        user:{
            type:UserType,
            resolve:(comment)=>{
                return comment.getUser();
            }
        }
    })
})

const ProductType= new GraphQLObjectType({
    name:'Product',
    description:'This represents a product',
    fields: () =>({
        id:{ type:GraphQLID},
        name: {type:GraphQLString},
        photo_path: {type:GraphQLString},
        description: {type:GraphQLString},
        price:{ type: GraphQLFloat},
        comments:{
            type:new GraphQLList(CommentType),
            resolve:(product)=>{
                return product.getComment();
            }
        },
        
        cart:{
            type:new GraphQLList(CartType),
            resolve:(product)=>{
                return product.getCart();
            }
        }
    })
})

const CartProductType= new GraphQLObjectType({
    name:'CartProduct',
    description:'This represents a cartproduct',
    fields: () =>({
        CartId:{ type: new GraphQLNonNull(GraphQLID)},
        ProductId:{ type: new GraphQLNonNull(GraphQLID)},
        cantity:{ type: new GraphQLNonNull(GraphQLID)},
    })
})

const UserType= new GraphQLObjectType({
    name:'User',
    description:'This represents a user',
    fields: () =>({
        id:{ type: GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        age:{ type: GraphQLInt},
        city: {type: GraphQLString},
        address: {type: GraphQLString},
        postal_code: {type: GraphQLString},
        comments:{
            type:new GraphQLList(CommentType),
            resolve:(user)=>{
                return user.getComment();
            }
        },
        cart:{
            type:CartType,
            resolve: (user)=>{
                return user.getCart()
            }
        }
    })
})

module.exports={
    UserType:UserType,
    CartType:CartType,
    ProductType:ProductType,
    CommentType:CommentType,
    CartProductType:CartProductType
}