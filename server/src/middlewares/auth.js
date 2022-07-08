const jwt = require("jsonwebtoken");

const { JWT_KEY } = require("../config");
const { User } = require("../models/user");

module.exports = async (req, res, next) => {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(403).send({ message: "No authorization provided" });
  }

  const token = bearerToken.split(" ")[1];
  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  try {
    const payload = jwt.verify(token, JWT_KEY);
    const user = await User.findById(payload.id);
    if (!user) {
      throw new Error("User does not exist");
    }
    req.userId = payload.id;
    return next();
  } catch (err) {
    return res.status(401).send({ message: "Unauthorized!" });
  }
};
