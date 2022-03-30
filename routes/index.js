var express = require('express');
const { PayloadTooLarge } = require('http-errors');
var router = express.Router();
const pool = require('../pool');
const connection = require('../mongdb');

/* GET home page. */
router.get('/migrate', async function(req, res, next) {
  const db = await connection(); // obtenemos la conexión
  const query  = await pool.query("CALL `build_json1`();");
  const {data} = query[0][0];
  await db.collection('productos').insertMany(data);
  res.json({status:true});
});

router.get('/table', async function(req,res,next){
  const db = await connection();
  const datos = await db.collection("productos").find({}).toArray();
  console.log(datos);
  res.render('tablesView', {datos});

});



module.exports = router;
