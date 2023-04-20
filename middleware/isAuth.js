const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  try {
    //  token => header
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "Not Authorized1 !" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const foundUser = await User.findOne({ _id: decoded.id });
    if (!foundUser) {
      return res.status(401).send({ errors: [{ msg: "Not Authorized2 !" }] });
    }
    req.user = foundUser;
    next();
  } catch (error) {
    return res.status(401).send({ errors: [{ msg: "Not Authorized 3!" }] });
  }
};

module.exports = isAuth;
