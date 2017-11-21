/**
 * Created by dekaihu on 2017/11/21.
 */
const fs = require('fs');
const { log } = require('./log-lib');
const request = require('request');

const saveTxt = function saveTxt({ txtArr, file }) {
    log('Server', `start saving file: ${file}`);
    txtArr.forEach(item => {
        fs.appendFileSync(file, item + '\n');
    });
};

const saveMp3 = function saveMp3({ uri, file }) {
    const f = fs.createWriteStream(file);
    log('Server', `start saving file: ${file}`);
    // TODO err handler
    request.get(uri).pipe(f);
};

module.exports = {
    saveTxt,
    saveMp3,
};
