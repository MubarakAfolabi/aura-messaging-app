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

module.exports = {
  findUserById,
  createUser,
  findUserByEmail,
  updateUsernameById,
  updateBioById,
};
