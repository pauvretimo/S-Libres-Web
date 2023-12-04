const express = require('express');
const router = express.Router();
const eleve = require('../services/eleve');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await eleve.getEleve());
  } catch (err) {
    console.error(`Error while getting eleve`, err.message);
    next(err);
  }
});


module.exports = router;
