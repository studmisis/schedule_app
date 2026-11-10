'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Teacher extends Model {
    static associate(models) {
      Teacher.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });

      Teacher.hasMany(models.Discipline, {
        foreignKey: 'teacher_id',
        as: 'disciplines',
      });

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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      full_name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      contacts: {
        type: DataTypes.STRING(255),
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
      modelName: 'Teacher',
      tableName: 'Teachers',
      timestamps: false,
    },
  );

  return Teacher;
};
