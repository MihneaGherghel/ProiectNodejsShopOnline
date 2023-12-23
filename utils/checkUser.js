const checkUser = (user) => {
  if (user === null) {
    throw new Error("Unauthorized");
  }
  return;
};

module.exports = checkUser;
