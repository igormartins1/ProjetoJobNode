const Sequelize= require('sequelize');

const sequelize= new Sequelize({
    dialect:'sqlite',
    Storage:'../db/app.db'
});

module.exports=sequelize; // exportar para fazer autentica��o banco de dados 

