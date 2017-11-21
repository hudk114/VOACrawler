/**
 * Created by dekaihu on 2017/11/21.
 */
const { getFullTimeString } = require('../lib/date-lib');

/**
 *
 * @type {{str: output, env: from server or browser or other place}}
 */
module.exports = (env, str) => {
    console.log(`${getFullTimeString()} [${env}] ${str}`);
};