var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  // TODO
  const p = path.join(__dirname, '../views/index.html');
  res.sendFile(p);
});

module.exports = router;
