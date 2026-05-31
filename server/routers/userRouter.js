const { Router } = require("express");
const userRouter = Router();
const userController = require("../controllers/userController.js");
const auth = require("../middleware/auth.js");

userRouter.patch("/users/me", auth, userController.updateUsernamePost);
userRouter.patch("/users/me/bio", auth, userController.updateBioPost);
userRouter.patch(
  "/users/me/password",
  auth,
  userController.changeUserPasswordPost,
);

// find users by email
userRouter.post("/users/search", auth, userController.findUsersByEmailPost);

module.exports = userRouter;
