/**
 * Created by dekaihu on 2017/8/4.
 */

const http = require('http');

const myFetch = function (uri, fn, fnErr) {
    http.get(uri, (res) => {
        if(302 === res.statusCode) {
            // redirect
            myFetch(res.headers.location, fn, fnErr);
            return;
        }
        
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            fn(rawData);
        });
    }).on('error', fnErr);
};

module.exports = myFetch;