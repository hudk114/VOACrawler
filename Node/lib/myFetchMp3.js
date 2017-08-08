/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const request = require('request');
const commonFuncs = require('./commonFuncs');

const myFetchMp3 = function (uri, name, fn, fnErr) {
    const p = path.resolve(__dirname, `../files/${ commonFuncs.getDateString() }/${ name }`);
    var f = fs.createWriteStream(`${ p }/${ name }.mp3`);
    http.get(uri, (res) => {
        if(302 === res.statusCode) {
            // redirect
            request.get(res.headers.location).pipe(f);
            // myFetchMp3(res.headers.location, fn, fnErr);
            return;
        }
    })
        .on('error', fnErr);
};

module.exports = myFetchMp3;