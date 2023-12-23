const checkUser = (req) => {
  console.log(req.raw.user);
  if (!req.raw.user) {
    throw new Error("Unauthorized");
  }
  return;
};

module.exports = checkUser;
