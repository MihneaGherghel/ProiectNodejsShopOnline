const db=require('../../../models/index')
const updateCommentResolver = async (_, args) => {
    const { id,ProductId,UserId,comment,stars } = args;

    const targetComment = await db.Comment.findByPk(id);

    if(!targetComment) {
      return null;
    }

    const updatedComment = await targetComment.update({
      ProductId,
      UserId,
      comment,
      stars
    });

    return updatedComment;
}

module.exports = updateCommentResolver;