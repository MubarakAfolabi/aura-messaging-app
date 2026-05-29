const { Router } = require("express");
const userRouter = Router();
const userController = require("../controllers/userController.js");
const auth = require("../middleware/auth.js");

userRouter.patch("/users/me", auth, userController.updateUsernamePost);

module.exports = userRouter;
