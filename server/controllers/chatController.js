const prisma = require("../prisma/prisma");
const queries = require("../prisma/queries.js");

const userFriendsGet = async (req, res) => {
  try {
    const userId = req.user.id;
    const friendShips = await queries.userFriends(userId);

    const friends = friendShips.map((item) =>
      item.friend.id === userId ? item.user : item.friend,
    );

    return res.status(200).json({ success: true, friends });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { userFriendsGet };
