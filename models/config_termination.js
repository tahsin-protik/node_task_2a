
const moment = require("moment");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const { intersection } = require("lodash");


module.exports = (sequelize, DataTypes) => {
  const Config_termination = sequelize.define(
    "config_termination",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      message: DataTypes.STRING, 
      counter: DataTypes.INTEGER

      
    },
    {
      timestamps: true,
      freezeTableName: true,
      tableName: "config_termination",
    },
    {
      underscoredAll: false,
      underscored: false,
    }
  );

  Config_termination._preCreateProcessing = function (data) {
    return data;
  };
  Config_termination._postCreateProcessing = function (data) {
    return data;
  };
  Config_termination._customCountingConditions = function (data) {
    return data;
  }; 

  return Config_termination;
};