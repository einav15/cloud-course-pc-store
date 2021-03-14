const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_ADMIN,
    process.env.MYSQL_PASS,
    {
        dialect: "mariadb",
        host: process.env.MYSQL_HOST
    }
)

module.exports = sequelize