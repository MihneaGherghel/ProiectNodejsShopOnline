const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const createCommentResolver = async (_, args, context) => {
  const { ProductId, UserId, comment, stars } = args;

  const req = context.req;

  checkUser(req);

  const newComment = await db.Comment.create({
    ProductId,
    UserId,
    comment,
    stars,
  });

  return newComment;
};

module.exports = createCommentResolver;
