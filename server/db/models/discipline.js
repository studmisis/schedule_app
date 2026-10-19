'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate(models) {
      Discipline.hasMany(models.Lesson, {
        foreignKey: 'discipline_id',
        as: 'lessons',
      });
    }
  }

  Discipline.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Discipline',
      tableName: 'Disciplines',
      timestamps: false,
    }
  );

  return Discipline;
};