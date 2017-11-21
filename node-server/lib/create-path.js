/**
 * Created by dekaihu on 2017/8/8.
 */
const fs = require('fs');
const path = require('path');
const commonFuncs = require('./common-funcs');

const createPath = function createPath(name, type, fn, fnErr) {
    let p = path.resolve(__dirname, '../files');
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    p += `/${commonFuncs.getDateString()}`;
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    p += `/${type}`;
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }

    // p += `/${name}`;
    // if(!fs.existsSync(p)) {
    //     fs.mkdirSync(p);
    // }
    console.log(`create path: ${p}`);
    fn();
};

module.exports = createPath;
