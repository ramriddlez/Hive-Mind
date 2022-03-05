//uuid random generator code for daily TIP insertions..
const { User, Tip } = require("../models/index");
const getAllTips = async () => {
  let allPosts = await Tip.findAll({});
  return allPosts;
};

const getAllUsers = async () => {
  let allUsers = await User.findAll({
    attributes: ["name", "email"],
    include: [{ model: Tip }],
  });
  return allUsers;
};
const findUserByEmail = async (email) => {
  let specificUser = await User.findOne({
    attributes: ["name", "email"],
    include: [{ model: Tip }],
    where: {
      email: email,
    },
  });
  return specificUser;
};

module.exports = {
  getAllTips,
  getAllUsers,
  findUserByEmail,
};

// module.exports = () =>
//   Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
