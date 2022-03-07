const { User } = require("../models");
const bcrypt = require("bcrypt");
const userData = [
  {
    name: "Gob Bluth",
    email: "gob@gmail.com",
    password: "gob@gmail.com",
  },
  {
    name: "George Michael Bluth",
    email: "gmb@gmail.com",
    password: "gmb@gmail.com",
  },
  {
    name: "Walter White",
    email: "ww@gmail.com",
    password: "ww@gmail.com",
  },
  {
    name: "Tyrion Lannister",
    email: "tyrion@gmail.com",
    password: "tyrion@gmail.com",
  },
  {
    name: "Fox Mulder",
    email: "fox@gmail.com",
    password: "fox@gmail.com",
  },
  {
    name: "Bruce Campbell",
    email: "bruce@gmail.com",
    password: "bruce@gmail.com",
  },
];

const seedUsers = async () => {
  let allUserData = userData.map(async (user) => {
    let tempUser = user;
    tempUser.password = await bcrypt.hash(user.password, 10);

    // tempUser.password = bcrypt.hash(tempUser.password, 10);
    // tempUser.password = await bcrypt.hash(user.password, 10);
    return tempUser;
  });

  let hashedData = await Promise.all(allUserData).then((data) => data);
  User.bulkCreate(hashedData);
};

module.exports = seedUsers;
