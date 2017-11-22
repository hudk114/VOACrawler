/**
 * Created by dekaihu on 2017/11/22.
 */
const express = require('express');
const router = express.Router();
const fileService = require('../business_layer/file-service');
const { log } = require('../lib/log-lib');

router.post('/', function(req, res, next) {
    log('Browser', 'get clear request');
    const time = req.body && req.body.time;
    let fileList;
    if ('all' === time) {
        // TODO delete all
    } else {
        fileList = fileService.getFileListByDate(new Date(time));
    }
    fileService.deleteFiles(fileList);
    // TODO 改成then, catch
    res.send('success');
});

module.exports = router;