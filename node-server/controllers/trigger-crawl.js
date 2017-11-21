/**
 * Created by dekaihu on 2017/8/1.
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const crawlFiles = require('../business_layer/crawl-files');

router.get('/', function(req, res, next) {
    crawlFiles();
    res.send('success');
});

module.exports = router;