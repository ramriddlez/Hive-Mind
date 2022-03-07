//uuid random generator code for daily TIP insertions..
const { User, Tip } = require("../models/index");
const getAllTips = async () => {
  let allPosts = await Tip.findAll({});
  return allPosts;
};

const getTipById = async (tipId) => {
  let singleTip = await Tip.findOne({
    where: {
      id: tipId,
    },
  });

  return singleTip;
};
const createNewTip = async (email, tipContent) => {
  let user = await findUserByEmail(email);
  console.log("my user: ", user);
  let newTip = {
    userName: user.name,
    tip: tipContent.blogText,
    user_id: user.id,
  };
  Tip.create(newTip);
};

const deleteTip = (tipId) => {
  let successDelete = true;
  Tip.destroy({
    where: {
      id: tipId,
    },
  }).catch((err) => console.log(err));
  return successDelete;
};

const getAllUsers = async () => {
  let allUsers = await User.findAll({
    attributes: ["id", "name", "email"],
    include: [{ model: Tip }],
  });
  return allUsers;
};

const incrementUpVotes = async (tipId, voteDirection) => {
  let tipVotes = await getTipById(tipId);
  let updatedVotes = await Tip.update(
    {
      votes: tipVotes.votes + 1,
    },
    {
      where: {
        id: parseInt(tipId),
      },
    }
  ).catch((err) => console.log(err));
  return updatedVotes;
};
const findUserByEmail = async (email) => {
  let specificUser = await User.findOne({
    attributes: ["id", "name", "email"],
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
  createNewTip,
  incrementUpVotes,
  deleteTip,
  getAllUsers,
  findUserByEmail,
  mostPopularFilter,
};

// module.exports = () =>
//   Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1);
