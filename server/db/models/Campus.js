const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://goo.gl/w4fXt7'
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
});

module.exports = Campus;