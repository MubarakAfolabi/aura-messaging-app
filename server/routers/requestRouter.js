const { Router } = require("express");
const requestRouter = Router();
const requestController = require("../controllers/requestController.js");
const auth = require("../middleware/auth.js");

requestRouter.post("/request", auth, requestController.sendFriendRequestPost);

requestRouter.get("/request/sent", auth, requestController.sentRequestsGet);

requestRouter.get(
  "/request/received",
  auth,
  requestController.receivedRequestsGet,
);

requestRouter.patch(
  "/request/accept",
  auth,
  requestController.acceptedRequestPatch,
);

requestRouter.delete(
  "/request/delete",
  auth,
  requestController.deleteRequestDelete,
);

module.exports = requestRouter;
