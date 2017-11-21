/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const request = require('request');
const { getFullPath } = require('../lib/path-lib');
const { log } = require('./log-lib');

const myFetchMp3 = function myFetchMp3(uri, type, name, fn, fnErr) {
    http.get(uri, res => {
        if (302 === res.statusCode) {
            // redirect
            myFetchMp3(res.headers.location, type, name, fn, fnErr);
            return;
        }
        const file = fs.createWriteStream(getFullPath({ type, name, fileType: 'mp3' }));

        log('Server', `start fetching mp3 file: ${name}`);
        request.get(uri).pipe(file);
        fn && fn(res);
    }).on('error', fnErr);
};

module.exports = myFetchMp3;
