const queries = require("../prisma/queries.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult, matchedData } = require("express-validator");

const validateUser = [
  body("username")
    .trim()
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers")
    .isLength({ min: 4, max: 12 })
    .withMessage("Username must be between 4 and 12 characters"),
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password do not match");
    }
    return true;
  }),
];

const registerUser = [
  validateUser,
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const firstError = errors.array();
        return res
          .status(400)
          .json({ success: false, message: firstError[0].msg });
      }

      const { username, email, password } = matchedData(req);

      const existingUser = await queries.findUserByEmail(email);

      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      await queries.createUser(username, email, hashedPassword);
      return res
        .status(200)
        .json({ success: true, message: "User created successfully" });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },
];

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await queries.findUserByEmail(email);

    if (!user) {
      return res
        .status(400)
        .json({ succes: false, message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ succes: false, message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({ success: true, token });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { registerUser, login };
