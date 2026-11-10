'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.hasMany(models.Student, {
        foreignKey: 'group_id',
        as: 'students',
      });

      Group.hasMany(models.Lesson, {
        foreignKey: 'group_id',
        as: 'lessons',
      });
    }
  }

  Group.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Group',
      tableName: 'Groups',
      timestamps: false,
    },
  );

  return Group;
};
