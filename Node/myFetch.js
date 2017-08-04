/**
 * Created by dekaihu on 2017/8/4.
 */

const http = require('http');

module.exports = function (uri, fn, fnErr) {
    http.get(uri, (res) => {
        let rawData = '';
    
        res.on('data', (chunk) => rawData += chunk);
    
        res.on('end', () => {
            fn(rawData);
        });
    }).on('error', fnErr);
}