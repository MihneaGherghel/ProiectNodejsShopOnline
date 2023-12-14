const db=require('../../../models/index')

const updateUserResolver = async (_, args) => {
    const { id, username,email,password,age,city,address,postal_code } = args;

    const targetUser = await db.Product.findByPk(id);

    if(!targetUser) {
      return null;
    }

    const updatedUser = await targetUser.update({
      username,
      email,
      password,
      age,
      city,
      address,
      postal_code
    });

    return updatedUser;
}

module.exports = updateUserResolver;