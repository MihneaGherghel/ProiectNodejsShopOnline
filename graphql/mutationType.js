const { GraphQLObjectType } = require("graphql");

const login = require("./mutations/user/login");
const createUser = require("./mutations/user/createUser");
const updateUser = require("./mutations/user/updateUser");
const deleteUser = require("./mutations/user/deleteUser");

const createCart = require("./mutations/cart/createCart");
const updateCart = require("./mutations/cart/updateCart");
const deleteCart = require("./mutations/cart/deleteCart");

const createProduct = require("./mutations/product/createProduct");
const updateProduct = require("./mutations/product/updateProduct");
const deleteProduct = require("./mutations/product/deleteProduct");

const createComment = require("./mutations/comment/createComment");
const updateComment = require("./mutations/comment/updateComment");
const deleteComment = require("./mutations/comment/deleteComment");

const createCartProduct = require("./mutations/cartproduct/createCartProduct");
const updateCartProduct = require("./mutations/cartproduct/updateCartProduct");
const deleteCartProduct = require("./mutations/cartproduct/deleteCartProduct");

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    login: login,
    addProduct: createProduct,
    updateProduct: updateProduct,
    deleteProduct: deleteProduct,
    addUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    addCart: createCart,
    updateCart: updateCart,
    deleteCart: deleteCart,
    addComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
    addCartProduct: createCartProduct,
    updateCartProduct: updateCartProduct,
    deleteCartProduct: deleteCartProduct,
  }),
});

module.exports = RootMutationType;
