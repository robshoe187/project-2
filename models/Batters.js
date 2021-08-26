const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Batters extends Model {}

Batters.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        team: {
            type: DataTypes.STRING,
            allowNull: false
        },
        games_played: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hits: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        average: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        home_runs: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rbi: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        // war: {
        //     type: DataTypes.DECIMAL(1, 1),
        //     allowNull: false
        // }

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'batters'
      }
);
module.exports = Batters;