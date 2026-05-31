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
  const sentRequests = await prisma.friendship.findMany({
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
  return sentRequests;
};

const requestsReceived = async (userId) => {
  const receivedRequests = await prisma.friendship.findMany({
    where: {
      friendId: userId,
      status: "PENDING",
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return receivedRequests;
};

const acceptRequest = async (requestId) => {
  const acceptedRequest = await prisma.friendship.update({
    where: {
      id: requestId,
    },
    data: {
      status: "ACCEPTED",
    },
  });
  return acceptedRequest;
};

const deleteRequest = async (requestId) => {
  const deletedRequest = await prisma.friendship.delete({
    where: {
      id: requestId,
    },
  });
  return deletedRequest;
};

const userFriends = async (userId) => {
  const friends = await prisma.friendship.findMany({
    where: {
      status: "ACCEPTED",
      OR: [{ userId }, { friendId: userId }],
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
      friend: {
        select: {
          id: true,
          username: true,
          email: true,
        },
      },
    },
  });
  return friends;
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
  requestsReceived,
  acceptRequest,
  deleteRequest,
  userFriends,
};
