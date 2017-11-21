/**
 * Created by dekaihu on 2017/8/1.
 */
const express = require('express');
const router = express.Router();
const path = require('path');

/* GET js files. */
router.get('/*', function(req, res, next) {
    const p = path.join(__dirname, `../public/javascripts/${req.params[0]}`);
    res.sendFile(p);
});

module.exports = router;