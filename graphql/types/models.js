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
        id:{ type: new GraphQLNonNull(GraphQLID)},
        UserId: {type: new GraphQLNonNull(GraphQLID)},
        status: {type: new GraphQLNonNull(GraphQLString)},
        total_price:{ type: new GraphQLNonNull(GraphQLFloat)},
        cart_prod:{
            type:new GraphQLList(CartProductType),
            resolve:async (cart)=>{
                return await db.CartProduct.findAll({
                    where: {
                        CartId: cart.id
                    }
                });
            }
        },
        user:{
            type:UserType,
            resolve:async (cart)=>{
                return await db.User.findByPk(cart.UserId);
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
        products:{
            type:new GraphQLList(ProductType),
            resolve:async (cart_prod)=>{
                return await db.Product.findAll({
                        where: {
                            id: cart_prod.ProductId
                        }
                });
            }
        },
        carts:{
            type: new GraphQLList(CartType),
            resolve:async (cart_prod)=>{
                return await db.Cart.findAll({
                        where: {
                        id: cart_prod.CartId
                        }
                });
            }
        }
    })
})

const CommentType= new GraphQLObjectType({
    name:'Comment',
    description:'This represents a comment',
    fields: () =>({
        id:{ type: new GraphQLNonNull(GraphQLID)},
        ProductId: {type:new GraphQLNonNull(GraphQLID)},
        UserId: {type:new GraphQLNonNull(GraphQLID)},
        comment:{type: new GraphQLNonNull(GraphQLString)},
        stars:{type: new GraphQLNonNull(GraphQLInt)},
        product:{
            type:ProductType,
            resolve:async (comment)=>{
                return await db.Product.findByPk(comment.ProductId);
            }
        },
        
        user:{
            type:UserType,
            resolve:async (comment)=>{
                return await db.User.findByPk(comment.UserId)
            }
        }
    })
})

const ProductType= new GraphQLObjectType({
    name:'Product',
    description:'This represents a product',
    fields: () =>({
        id:{ type: new GraphQLNonNull(GraphQLID)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        photo_path: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        price:{ type: new GraphQLNonNull(GraphQLFloat)},
        comments:{
            type:new GraphQLList(CommentType),
            resolve:async (product)=>{
                return await db.Commnet.findAll({
                        where: {
                            ProductId: product.id
                        }
                });
            }
        },
        cart_prod:{
            type:new GraphQLList(CartProductType),
            resolve:async (product)=>{
                return await db.CartProduct.findAll({
                        where: {
                            ProductId: product.id
                        }
                });
            }
        }
    })
})

const UserType= new GraphQLObjectType({
    name:'User',
    description:'This represents a user',
    fields: () =>({
        id:{ type: new GraphQLNonNull(GraphQLID)},
        username: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        password: {type: new GraphQLNonNull(GraphQLString)},
        age:{ type: new GraphQLNonNull(GraphQLInt)},
        city: {type: new GraphQLNonNull(GraphQLString)},
        address: {type: new GraphQLNonNull(GraphQLString)},
        postal_code: {type: new GraphQLNonNull(GraphQLString)},
        comments:{
            type:new GraphQLList(CommentType),
            resolve: async (user)=>{
                return await db.Comment.findAll({
                        where: {
                            UserId: user.id
                        }
                });
            }
        },
        cart:{
            type:CartType,
            resolve: async (user)=>{
                return await db.Cart.findOne({where: { UserId: user.id}});
            }
        }
    })
})

module.exports={
    UserType:UserType,
    CartType:CartType,
    CartProductType:CartProductType,
    ProductType:ProductType,
    CommentType:CommentType
}