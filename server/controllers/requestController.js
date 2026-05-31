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

module.exports = { sendFriendRequestPost, sentRequestsGet };
