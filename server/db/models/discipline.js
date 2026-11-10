'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Discipline extends Model {
    static associate(models) {
      Discipline.belongsTo(models.Teacher, {
        foreignKey: 'teacher_id',
        as: 'teacher',
      });

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
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Discipline',
      tableName: 'Disciplines',
      timestamps: false,
    },
  );

  return Discipline;
};
