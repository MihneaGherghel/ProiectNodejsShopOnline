const db=require('../../../models/index')

const createUserResolver = async (_, args) => {
    const { username,email,password,age,city,address,postal_code } = args;
    const newUser = await db.User.create({
      username,
      email,
      password,
      age,
      city,
      address,
      postal_code
    });
  
    return newUser;
}

module.exports = createUserResolver;