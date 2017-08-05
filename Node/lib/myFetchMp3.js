/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const fs = require('fs');
const request = require('request');

const myFetchMp3 = function (uri, path, name, fn, fnErr) {
    //pipe(fs.createWriteStream(name));
    var f = fs.createWriteStream(name + '.mp3');
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