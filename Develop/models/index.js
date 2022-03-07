const Tip = require("./Tip");
const User = require("./User");

User.hasMany(Tip, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Tip.belongsTo(User, {
  foreignKey: "user_id",
});

// Tip.hasMany(User, {
//   foreignKey: '',
//   onDelete: 'CASCADE',
// });

// User.belongsTo(Tip, {
//   foreignKey: '',
// });

module.exports = { User, Tip };
