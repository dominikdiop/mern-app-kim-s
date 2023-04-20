const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// register
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "this email already exists !" }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //newUser
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;
    await newUser.save();
    // creation token
    const token = jwt.sign(
      {
        id: newUser._id, 
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ msg: "Register completed ...", user: newUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "This email already exists !" }] });
  }
};

//login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).send({ errors: [{ msg: "can not login !" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Check your Email or Password !" }] });
    }
    // creation token
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).send({ msg: "Login completed", user: foundUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Can not login !" }] });
  }
};
