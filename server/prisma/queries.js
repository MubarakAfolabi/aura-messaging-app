const prisma = require("./prisma.js");

const findUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
};

const createUser = async (username, email, password) => {
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  return user;
};

const findUserByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
};

const updateUsernameById = async (id, username) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      username,
    },
  });
  return user;
};

const updateBioById = async (id, bio) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      bio,
    },
  });
  return user;
};

const changeUserPassword = async (id, password) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      password,
    },
  });
  return user;
};

const sendFriendRequest = async (senderId, receiverId) => {
  const request = await prisma.friendship.create({
    data: {
      userId: senderId,
      friendId: receiverId,
    },
  });
  return request;
};

const existingRequest = async (userId, friendId) => {
  const request = await prisma.friendship.findFirst({
    where: {
      OR: [
        {
          userId: userId,
          friendId: friendId,
        },
        {
          userId: friendId,
          friendId: userId,
        },
      ],
    },
  });
  return request;
};

const requestsSent = async (userId) => {
  const sentRequest = await prisma.friendship.findMany({
    where: {
      userId,
      status: "PENDING",
    },
    include: {
      friend: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return sentRequest;
};

module.exports = {
  findUserById,
  createUser,
  findUserByEmail,
  updateUsernameById,
  updateBioById,
  changeUserPassword,
  sendFriendRequest,
  existingRequest,
  requestsSent,
};
