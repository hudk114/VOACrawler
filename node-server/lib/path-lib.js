/**
 * Created by dekaihu on 2017/8/8.
 */
const fs = require('fs');
const path = require('path');
const { getDayString, getMonthString } = require('./date-lib');
const { log, err } = require('./log-lib');

/** type/month/{date}name
 *  example: special/2017-11/07'Paradise Papers' Show Secret Wealth of Officials, Famous People.mp3
 */
const createRootPath = function createRootPath(name, type, fn, fnErr) {
    let p = path.resolve(__dirname, '../files');

    try {
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }

        p += `/${type}`;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
        }

        p += `/${getMonthString()}`;
        if (!fs.existsSync(p)) {
            fs.mkdirSync(p);
            log('Server', `create path: ${p}`);
        }

        fn(p);
    } catch (e) {
        err('Server', `failed at create path ${p}, err is: ${err.message}`);
        fnErr(e);
    }
};

const getRootPath = function getRootPath(type, date) {
    return path.resolve(__dirname, `../files/${type}/${getMonthString(date)}`);
};

// name can't have /,\,:,*,?,",<,>,|
const fixName = function fixName(name) {
    const arr = name.split('').filter(item => {
        if ('/' === item || '\\' === item || ':' === item || '*' === item
            || '?' === item || '"' === item || '<' === item || '>' === item
            || '|' === item) {
            return false;
        }
        return true;
    });

    return `${getDayString()}${arr.join('')}`;
};

const getFullPath = function getFullPath({ type, name, fileType }) {
    return `${getRootPath(type)}/${fixName(name)}.${fileType}`;;
};

module.exports = {
    createRootPath,
    getRootPath,
    getFullPath,
};
