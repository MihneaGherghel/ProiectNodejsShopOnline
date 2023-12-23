const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteCommentResolver = async (_, args, context) => {
  const { id } = args;

  const req = context.req;

  checkUser(req);

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
