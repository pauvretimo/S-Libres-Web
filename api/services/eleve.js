const db = require('./db');
const helper = require('../helper');

async function getEleve(){
  const rows = await db.query(
    `SELECT * FROM eleve`
  );
  const data = helper.emptyOrRows(rows);


  return {
    data
  }
}

module.exports = {
    getEleve
}