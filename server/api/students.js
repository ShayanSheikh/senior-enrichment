const express = require('express');
const router = express.Router();
const Student = require('../db/models/Student');
module.exports = router;

router.get('/', function (req, res, next) {
  Student.findAll({ include: { all: true } })
    .then(students => res.json(students))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Student.findOrCreate({ where: req.body })
    .then(student => res.json(student[0]))
    .catch(next);
});

router.put('/:studentId', (req, res, next) => {
  Student.findOne({
    where: { id: req.params.studentId }
  })
    .then(student => {
      return student.update(req.body)
    })
    .then(updated => {
      res.json(updated);
    })
    .catch(next);
});

router.delete('/:studentId', (req, res, next) => {
  Student.findOne({
    where: { id: req.params.studentId }
  })
    .then(student => {
      return student.destroy()
    })
    .then(res.send(202))
    .catch(next);
});