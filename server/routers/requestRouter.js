const { Router } = require("express");
const requestRouter = Router();
const requestController = require("../controllers/requestController.js");
const auth = require("../middleware/auth.js");

requestRouter.post("/request", auth, requestController.sendFriendRequestPost);

module.exports = requestRouter;
