const db=require('../../../models/index')

const createCommentResolver = async (_, args) => {
    const { ProductId,UserId,comment,stars } = args;
    const newComment = await db.Comment.create({
      ProductId,
      UserId,
      comment,
      stars
    });
  
    return newComment;
}

module.exports = createCommentResolver;