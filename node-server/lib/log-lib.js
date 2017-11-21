/**
 * Created by dekaihu on 2017/11/21.
 */
const { getFullTimeString } = require('../lib/date-lib');

/**
 * @type {{str: output, env: from server or browser or other place}}
 */
const log = function log(env, str) {
    console.log(`${getFullTimeString()} [${env}] ${str}`);
};

const warn = function warn(env, str) {
    console.warn(`${getFullTimeString()} [${env}] ${str}`);
};

const err = function err(env, str) {
    console.err(`${getFullTimeString()} [${env}] ${str}`);
};

module.exports = {
    log,
    warn,
    err,
};
