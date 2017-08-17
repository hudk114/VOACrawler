/**
 * Created by dekaihu on 2017/8/16.
 */
const path = require('path');
const fs = require('fs');
const commonFuncs = require('./commonFuncs');

module.exports = function (txtArr, type, name) {
    const p = path.resolve(__dirname, `../files/${commonFuncs.getDateString()}/${type}`);
    const file = `${p}/${commonFuncs.fixName(name)}.txt`;

    txtArr.forEach(item => {
        fs.appendFileSync(file, item + '\n');
    });
};
