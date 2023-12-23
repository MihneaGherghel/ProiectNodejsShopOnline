const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const updateCommentResolver = async (_, args) => {
  const { id, ProductId, UserId, comment, stars } = args;

  const { user } = context.user;

  checkUser(user);

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
