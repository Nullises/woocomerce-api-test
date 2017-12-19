var express = require('express');
var router = express.Router();
var WooCommerce = require('../server/config');

//Pagina inicial
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Express' });
});

// GET ALL
WooCommerce.get('products', function(err, data, res) {
  console.log(res);
});

// GET BY ID


module.exports = router;
