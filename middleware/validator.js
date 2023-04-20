//importation
const { check, validationResult } = require("express-validator");

// Register
exports.registerValidation = () => [
  check("name", "Name is required !").not().isEmpty(),
  check("email", "Enter a valid Email !").isEmail(),
  check("password", "Enter a valid Password !").isLength({ min: 6 }),
];

//Login
exports.loginValidation = () => [
  check("email", "Enter a valid Email !").isEmail(),
  check("password", "Enter a valid Password !").isLength({ min: 6 }),
];

//Error
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
