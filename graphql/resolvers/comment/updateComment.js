const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateCommentResolver = async (_, args, context) => {
  const { id, ProductId, UserId, comment, stars } = args;

  const req = context.req;

  checkUser(req);

  const targetComment = await db.Comment.findByPk(id);

  if (!targetComment) {
    return null;
  }

  const updatedComment = await targetComment.update({
    ProductId,
    UserId,
    comment,
    stars,
  });

  return updatedComment;
};

module.exports = updateCommentResolver;
