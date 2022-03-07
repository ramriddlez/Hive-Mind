const { UUIDV4, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FavouriteList extends Model {}

FavouriteList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    list_userID: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    favourite_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "tip",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "favourite_list",
  }
);
module.exports = FavouriteList;
