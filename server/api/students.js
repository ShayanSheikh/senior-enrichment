const express = require('express');
const router = express.Router();
const models = require('../db/models');
const Student = models.Student;
module.exports = router;

router.get('/', function (req, res, next) {
  Student.findAll({ where: req.query })
    .then(students => res.json(students))
    .catch(next);
});