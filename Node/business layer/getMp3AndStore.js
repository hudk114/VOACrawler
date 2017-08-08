/**
 * Created by dekaihu on 2017/8/5.
 */
const myFetch = require('../lib/myFetch.js');
const myFetchMp3 = require('../lib/myFetchMp3.js');

const CONFIG = require('../Config.json');

module.exports = function ({ uri, type, name }) {
    myFetch(CONFIG.domain + uri, (d) => {
        const mp3Uri = getMp3Uri(d);
        // const txt = getTxt(d);
        // TODO store txt; get mp3 file, store
        myFetchMp3(mp3Uri, type, name, (d) => {
            console.log(d);
        }, (e) => {
            console.error(`get mp3 file error: ${ e.message }`);
        });
    }, (e) => {
        console.error(`get mp3 path error: ${ e.message }`);
    })
};

var getTxt = function (rawTxt) {
    // TODO
};

var getMp3Uri = function (rawTxt) {
    const str = `<a id="mp3" href="(.*\\.mp3)" title="鼠标右键点击下载">`;
    const pattern = new RegExp(str, 'g');
    const match = pattern.exec(rawTxt);
    
    return match && match[1];
};