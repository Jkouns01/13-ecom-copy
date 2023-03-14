const { Model, DataTypes } = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types.js');

const sequelize = require('../config/connection.js');

class Tag extends Model { }

Tag.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_Name: {
            type: DataTypes.STRING
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tag',
    }
);
FOREIGNKEYS = product.id;
module.exports = Tag;
