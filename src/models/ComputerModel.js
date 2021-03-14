const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Message = sequelize.define('computer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manufactor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    processor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gbRam: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gbHDD: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usdPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
})

module.exports = Message