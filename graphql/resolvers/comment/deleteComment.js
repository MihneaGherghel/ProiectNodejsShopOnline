const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteCommentResolver = async (_, args) => {
  const { id } = args;

  const { user } = context.user;

  checkUser(user);

  const targetComment = await db.Comment.findByPk(id);

  if (!targetComment) {
    return null;
  }

  try {
    await targetComment.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteCommentResolver;
