const { Sequelize } = require('sequelize');

const connection = new Sequelize('guia_perguntas', 'root', '' ,{
    host: 'localhost', 
    dialect: 'mysql',
})

module.exports = connection;