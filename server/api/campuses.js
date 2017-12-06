const express = require('express');
const router = express.Router();
const Campus = require('../db/models/Campus');
module.exports = router;

router.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  Campus.findOrCreate({where: req.body})
    .then(campus => res.json(campus[0]))
    .catch(next);
});

router.put('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: { id: req.params.campusId }
  })
    .then(article => {
      return article.update(req.body)
    })
    .then(updated => {
      res.json(updated);
    })
    .catch(next);
});

router.delete('/:campusId', (req, res, next) => {
  Campus.findOne({
    where: { id: req.params.campusId }
  })
    .then(article => {
      return article.destroy()
    })
    .then(res.send(202))
    .catch(next);
});