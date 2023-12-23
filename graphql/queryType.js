const { GraphQLObjectType } = require("graphql");

const userQuery = require("./queries/user/user");
const usersQuery = require("./queries/user/users");
const productQuery = require("./queries/product/product");
const productsQuery = require("./queries/product/products");
const cartQuery = require("./queries/cart/cart");
const cartsQuery = require("./queries/cart/carts");
const commentQuery = require("./queries/comment/comment");
const commentsQuery = require("./queries/comment/comments");
const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: {
    products: productsQuery,
    product: productQuery,
    comment: commentQuery,
    comments: commentsQuery,
    carts: cartsQuery,
    cart: cartQuery,
    users: usersQuery,
    user: userQuery,
  },
});
module.exports = RootQueryType;
