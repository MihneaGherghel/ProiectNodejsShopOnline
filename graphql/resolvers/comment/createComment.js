const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCommentResolver = async (_, args) => {
  const { ProductId, UserId, comment, stars } = args;

  const { user } = context.user;

  checkUser(user);

  const newComment = await db.Comment.create({
    ProductId,
    UserId,
    comment,
    stars,
  });

  return newComment;
};

module.exports = createCommentResolver;
