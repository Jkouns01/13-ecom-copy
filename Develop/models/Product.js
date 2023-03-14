// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {
    static get tableName() {
        return 'category';
    }


}

// set up fields and rules for Product model
Product.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
            FOREIGNKEYS = tag_Name
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            //dataTypes.validate(true)
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: (10, isNaN)
        },
        category_id: {
            type: DataTypes.INTEGER,
            // ref the category models id
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;
