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
    favourite_id: {
      references: {
        model: "Tip",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "tip",
  }
);
