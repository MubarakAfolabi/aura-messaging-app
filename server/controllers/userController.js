const queries = require("../prisma/queries.js");
const { body, validationResult, matchedData } = require("express-validator");

const validateUsername = [
  body("username")
    .trim()
    .isAlphanumeric()
    .withMessage("Username must only contain letters and numbers")
    .isLength({ min: 4, max: 12 })
    .withMessage("Username must be between 4 and 12 characters"),
];

const updateUsernamePost = [
  validateUsername,
  async (req, res) => {
    const id = req.user.id;
    console.log(id);
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const firstError = errors.array();
        return res
          .status(400)
          .json({ success: false, message: firstError[0].msg });
      }

      const { username } = matchedData(req);

      await queries.updateUsernameById(id, username);
      return res
        .status(200)
        .json({ success: true, message: "Username updated successfully" });
    } catch (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
  },
];

module.exports = { updateUsernamePost };
