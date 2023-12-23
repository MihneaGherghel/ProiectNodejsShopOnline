const db = require("../../../models/index");
const checkUser = require("../../../utils/checkUser");

const deleteUserResolver = async (_, args, context) => {
  const { id } = args;

  const req = context.req;

  checkUser(req);

  const targetUser = await db.User.findByPk(id);

  if (!targetUser) {
    return null;
  }

  try {
    await targetUser.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserResolver;
