const queries = require("../prisma/queries.js");

const sendFriendRequestPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const { friendId } = req.body;

    await queries.sendFriendRequest(userId, friendId);
    return res
      .status(200)
      .json({ success: true, message: "Friend Request sent" });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { sendFriendRequestPost };
