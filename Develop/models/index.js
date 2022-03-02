const Tip = require('./Tip');
const User = require('./User');


User.hasOne(Tip, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

Tip.belongsTo(User, {
    foreignKey: '',
});
  

Tip.hasMany(User, {
  foreignKey: '',
  onDelete: 'CASCADE',
});

User.belongsTo(Tip, {
  foreignKey: '',
});


module.exports = { User, Tip };
