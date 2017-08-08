/**
 * Created by dekaihu on 2017/8/1.
 * this is the business layer. for it's too easy, so put in one file.
 */
const myFetch = require('../lib/myFetch.js');
const CONFIG = require('../Config.json');
const getMp3AndStore = require('./getMp3AndStore');
const commonFuncs = require('../lib/commonFuncs');
const createPath = require('../lib/createPath');

const URI0 = '/VOA_Standard_English/';
const URI1 = '/VOA_Special_English/';

module.exports = function () {
    myFetch(CONFIG.domain + URI1, (d) => {
        let arr = getListFromHtml(d);
        arr.forEach((item) => {
            createPath(item.name, 1, (e) => {
                getMp3AndStore(item);
            });
        });
    }, (e) => {
        console.error(`get file name error: ${ e.message }`);
    });
};

var getListFromHtml = function (rawTxt) {
    let arr = [];
    const dString = commonFuncs.getDateString();
    const str = `<a href="(.{0,100}\\.html)" target="_blank">(.{0,100})\\(${dString}\\)</a>`;
    const pattern = new RegExp(str, 'g');

    let match = pattern.exec(rawTxt);
    while (match) {
        arr.push({
            uri: match[1] && match[1].trim(),
            name: match[2] && match[2].trim(),
        });
        match = pattern.exec(rawTxt);
    }
    
    return arr;
};
