/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const request = require('request');
const commonFuncs = require('./commonFuncs');

// name can't have /,\,:,*,?,",<,>,|
var fixName = function fixName(name) {
    const arr = name.split('').filter(item => {
        if('/' === item || '\\' === item || ':' === item || '*' === item
            || '?' === item || '"' === item || '<' === item || '>' === item
            || '|' === item) {
            return false;
        }
        return true;
    });
    return arr.join('');
}

const myFetchMp3 = function (uri, type, name, fn, fnErr) {
    http.get(uri, (res) => {
        if(302 === res.statusCode) {
            // redirect
            myFetchMp3(res.headers.location, type, name, fn, fnErr);
            return;
        }
        const p = path.resolve(__dirname, `../files/${ commonFuncs.getDateString() }/${ type }`); // /${ name }`);
        const f = fs.createWriteStream(`${ p }/${ fixName(name) }.mp3`);
        request.get(uri).pipe(f);
    }).on('error', fnErr);
};

module.exports = myFetchMp3;