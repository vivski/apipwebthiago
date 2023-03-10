const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

/** Representação de uma tabela do banco mapeada nessa classe */
/**
 * https://sequelize.org/docs/v6/core-concepts/model-basics/ 
 * 
 * */

const Categorias = sequelize.define('Categorias', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,

  },
}, {
  sequelize,
  tableName: 'categoria',
  timestamps: false,
});

module.exports = Categorias;
