const queries = require("../prisma/queries.js");
const { body, validationResult, matchedData } = require("express-validator");
const bcrypt = require("bcrypt");

const validateUsername = [
  body("username")
    .trim()
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers")
    .isLength({ min: 4, max: 12 })
    .withMessage("Username must be between 4 and 12 characters"),
];

const validateBio = [
  body("bio")
    .trim()
    .notEmpty()
    .withMessage("Share a little about yourself")
    .isLength({ max: 160 })
    .withMessage("Bio cannot exceed 160 characters"),
];

const validatePassword = [
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("Password must be atleast 6 characters long"),
  body("confirmNewPassword").custom((value, { req }) => {
    if (value !== req.body.newPassword) {
      throw new Error("Password do not match");
    }
    return true;
  }),
];

const updateUsernamePost = [
  validateUsername,
  async (req, res) => {
    const id = req.user.id;
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const firstError = errors.array();
        return res
          .status(400)
          .json({ success: false, message: firstError[0].msg });
      }

      const { username } = matchedData(req);

      const user = await queries.updateUsernameById(id, username);
      return res.status(200).json({
        success: true,
        user,
        message: "Username updated successfully",
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },
];

const updateBioPost = [
  validateBio,
  async (req, res) => {
    const id = req.user.id;
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const firstError = errors.array();
        return res
          .status(400)
          .json({ success: false, message: firstError[0].msg });
      }

      const { bio } = matchedData(req);

      const user = await queries.updateBioById(id, bio);
      return res.status(200).json({
        success: true,
        user,
        message: "Bio updated successfully",
      });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },
];

const changeUserPasswordPost = [
  validatePassword,
  async (req, res) => {
    const id = req.user.id;
    const { oldPassword } = req.body;
    try {
      const isMatch = await bcrypt.compare(oldPassword, req.user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ success: false, message: "Password is incorrect" });
      }

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const firstError = errors.array();
        return res
          .status(400)
          .json({ success: false, message: firstError[0].msg });
      }

      const { newPassword } = matchedData(req);
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await queries.changeUserPassword(id, hashedPassword);

      return res
        .status(200)
        .json({ success: true, message: "Password changed successfully" });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },
];

module.exports = { updateUsernamePost, updateBioPost, changeUserPasswordPost };
