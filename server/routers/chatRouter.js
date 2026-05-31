const { Router } = require("express");
const chatRouter = Router();
const chatController = require("../controllers/chatController.js");
const auth = require("../middleware/auth.js");

chatRouter.get("/chat", auth, chatController.userFriendsGet);

module.exports = chatRouter;
