/**
 * Created by dekaihu on 2017/8/1.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET js files. */
router.get('/*', function(req, res, next) {
    // TODO get res
    const p = path.join(__dirname, `../public/javascripts/${req.params[0]}`);
    res.sendFile(p);
});

module.exports = router;