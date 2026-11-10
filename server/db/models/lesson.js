'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Lesson extends Model {
    static associate(models) {
      Lesson.belongsTo(models.Teacher, {
        foreignKey: 'teacher_id',
        as: 'teacher',
      });

      Lesson.belongsTo(models.Discipline, {
        foreignKey: 'discipline_id',
        as: 'discipline',
      });

      Lesson.belongsTo(models.Group, {
        foreignKey: 'group_id',
        as: 'group',
      });

      Lesson.belongsTo(models.User, {
        foreignKey: 'created_by',
        as: 'creator',
      });
    }
  }

  Lesson.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      discipline_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      teacher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      topic: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      join_url: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      recording_url: {
        type: DataTypes.STRING(500),
        allowNull: true,
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
      modelName: 'Lesson',
      tableName: 'Lessons',
      timestamps: false,
    },
  );

  return Lesson;
};
