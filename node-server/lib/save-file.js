/**
 * Created by dekaihu on 2017/8/16.
 */
const path = require('path');
const fs = require('fs');
const { getFullPath } = require('./path-lib');
const { log } = require('./log-lib');

module.exports = ({ txtArr, type, name }) => {
    const file = getFullPath({ type, name, fileType: 'txt' });

    log('Server', `start saving file: ${name}`);
    txtArr.forEach(item => {
        fs.appendFileSync(file, item + '\n');
    });
};
