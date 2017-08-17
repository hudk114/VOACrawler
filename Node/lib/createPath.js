/**
 * Created by dekaihu on 2017/8/8.
 */
const fs = require('fs');
const path = require('path');
const commonFuncs = require('./commonFuncs');

var createPath = function (name, type, fn, fnErr) {
    let p = path.resolve(__dirname, '../files');
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    p += `/${ commonFuncs.getDateString() }`;
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    p += `/${ type }`;
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    // p += `/${ name }`;
    // if(!fs.existsSync(p)) {
    //     fs.mkdirSync(p);
    // }

    fn();
};

module.exports = createPath;
