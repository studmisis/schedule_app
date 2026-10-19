'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      Teacher.hasMany(models.Lesson, {
        foreignKey: 'teacher_id',
        as: 'lessons',
      });
    }
  }

  Teacher.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      contacts: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Teacher',
      tableName: 'Teachers',
      timestamps: false,
    }
  );

  return Teacher;
};