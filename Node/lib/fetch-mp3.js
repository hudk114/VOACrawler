/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const request = require('request');
const commonFuncs = require('./common-funcs');

const myFetchMp3 = function myFetchMp3(uri, type, name, fn, fnErr) {
    http.get(uri, (res) => {
        if (302 === res.statusCode) {
            // redirect
            myFetchMp3(res.headers.location, type, name, fn, fnErr);
            return;
        }
        const p = path.resolve(__dirname, `../files/${commonFuncs.getDateString()}/${type}`);
        const f = fs.createWriteStream(`${p}/${commonFuncs.fixName(name)}.mp3`);
        console.log(`start fetch mp3 file: ${name}`);
        request.get(uri).pipe(f);
    }).on('error', fnErr);
};

module.exports = myFetchMp3;
