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

  let formattedVersion = specificUser.get({ plain: true });
  return formattedVersion;
};
/**
 * filter types: most popular, newest
 */
const mostPopularFilter = async () => {
  let orderedTips = await Tip.findAll({
    order: [["votes", "DESC"]],
  });

  let formattedTips = orderedTips.map((tip) => tip.get({ plain: true }));
  return formattedTips;
};

module.exports = {
  getAllTips,
  getAllUsers,
  findUserByEmail,
  mostPopularFilter,
};

// module.exports = () =>
//   Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
