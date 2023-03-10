const Sequelize = require('sequelize');

const sequelize = new Sequelize('vivianlopes', 'root', 'senhaforte@lula13', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
