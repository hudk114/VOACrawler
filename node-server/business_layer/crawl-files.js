/**
 * Created by dekaihu on 2017/8/1.
 * this is the business layer. for it's too easy, so put in one file.
 */
const myFetch = require('../lib/my-fetch.js');
const config = require('../config.json');
const getMp3AndStore = require('./get-mp3-and-store');
const commonFuncs = require('../lib/common-funcs');
const createPath = require('../lib/create-path');

const getListFromHtml = function getListFromHtml(rawTxt, type) {
    const arr = [];
    const dString = commonFuncs.getDateString();
    const str = `<a href="(.{0,100}\\.html)" target="_blank">(.{0,100})\\(${dString}\\)</a>`;
    const pattern = new RegExp(str, 'g');
    
    let match = pattern.exec(rawTxt);
    while (match) {
        arr.push({
            uri: match[1] && match[1].trim(),
            name: match[2] && match[2].trim(),
            type: type,
        });
        match = pattern.exec(rawTxt);
    }
    
    return arr;
};

const crawlFiles = function () {
    console.log('getting files...');
    
    config.query.forEach(item => {
        myFetch(config.domain + item.uri, d => {
            const arr = getListFromHtml(d, item.type);
            arr.forEach(i => {
                createPath(i.name, item.type, () => {
                    getMp3AndStore(i);
                });
            });
        }, e => {
            console.error(`get file name error: ${e.message}`);
        });
    });
};

module.exports = crawlFiles;
