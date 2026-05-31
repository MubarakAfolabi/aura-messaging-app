const queries = require("../prisma/queries.js");

const sendFriendRequestPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { friendId } = req.body;

    const request = await queries.existingRequest(userId, friendId);

    if (request) {
      if (request.userId === req.user.id) {
        return res.status(409).json({
          success: false,
          message: "You already sent a request to this user",
        });
      } else {
        return res.status(409).json({
          success: false,
          message: "This user already sent you a request",
        });
      }
    }

    await queries.sendFriendRequest(userId, friendId);
    return res
      .status(200)
      .json({ success: true, message: "Friend Request sent" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const sentRequestsGet = async (req, res) => {
  try {
    const userId = req.user.id;

    const sentRequests = await queries.requestsSent(userId);

    return res.status(200).json({ success: true, sentRequests });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const receivedRequestsGet = async (req, res) => {
  try {
    const userId = req.user.id;
    const receivedRequests = await queries.requestsReceived(userId);
    return res.status(200).json({ success: true, receivedRequests });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const acceptedRequestPatch = async (req, res) => {
  try {
    const { requestId } = req.body;

    const acceptedRequest = await queries.acceptRequest(requestId);
    return res
      .status(200)
      .json({ success: true, acceptedRequest, message: "Request Accepted" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

const deleteRequestDelete = async (req, res) => {
  try {
    const { requestId } = req.body;
    const deletedRequest = await queries.deleteRequest(requestId);
    return res
      .status(200)
      .json({ success: true, deletedRequest, message: "Request Deleted" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = {
  sendFriendRequestPost,
  sentRequestsGet,
  receivedRequestsGet,
  acceptedRequestPatch,
  deleteRequestDelete,
};
