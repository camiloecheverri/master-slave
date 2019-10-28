const Sequelize = require('sequelize')

const {PORTDB,DATA_BASE2,PASSWORD2,HOST2} = process.env
const sequelize = new Sequelize(DATA_BASE2, "root", PASSWORD2, {
    host: HOST2,
    port: PORTDB,
    dialect: 'mysql',
})
module.exports = sequelize