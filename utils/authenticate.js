const { JWT_SECRET } = require("../config/config.json");
const jwt = require("jsonwebtoken");
const db = require("../models");

const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const data = jwt.verify(token, JWT_SECRET);
        const user = await db.User.findByPk(data.userId);
        if (user) {
          req.user = user.dataValues;
        }
      } catch (err) {
        console.log("Invalid token");
      }
    }
  }
  next();
};

module.exports = authenticate;
