/**
 * Created by dekaihu on 2017/8/1.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const fire = require('../business layer/crawlFiles');

router.get('/', function(req, res, next) {
    // TODO do things here
    fire();
    res.send('123');
});

module.exports = router;