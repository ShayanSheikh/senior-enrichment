const express = require('express');
const router = express.Router();
const Student = require('../db/models/Student');
module.exports = router;

router.get('/', function (req, res, next) {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next);
});

router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(student => res.json(student))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Student.findOrCreate(req.body)
    .then(student => res.json(student))
    .catch(next);
});

router.put('/:studentId', (req, res, next) => {
  Student.findOne({
    where: { id: req.params.studentId }
  })
    .then(article => {
      return article.update(req.body)
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
    .then(article => {
      return article.destroy()
    })
    .then(res.send(202))
    .catch(next);
});