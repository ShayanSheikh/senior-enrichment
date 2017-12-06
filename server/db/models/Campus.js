const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    validate: {
      allowNull: false,
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'goo.gl/2DDCXq'
  },
  description: {
    type: Sequelize.TEXT,
  }
});