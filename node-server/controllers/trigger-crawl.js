/**
 * Created by dekaihu on 2017/8/1.
 */
const express = require('express');
const router = express.Router();
const crawlFiles = require('../business_layer/crawl-files');
const { log } = require('../lib/log-lib');

router.get('/', function(req, res, next) {
    // TODO req from
    log('Browser', 'get trigger request');
    crawlFiles();
    res.send('success');
});

module.exports = router;
