const Sequelize = require('sequelize')
const {PORTDB,DATA_BASE,PASSWORD,HOST} = process.env
const sequelize = new Sequelize(DATA_BASE, "root", PASSWORD, {
    host: HOST,
    port: PORTDB,
    dialect: 'mysql',
})
module.exports = sequelize