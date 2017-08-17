/**
 * Created by dekaihu on 2017/8/5.
 */
const myFetch = require('../lib/myFetch');
const myFetchMp3 = require('../lib/myFetchMp3');
const mySaveFile = require('../lib/mySaveFile');
const CONFIG = require('../Config.json');

module.exports = function ({ uri, type, name }) {
    myFetch(CONFIG.domain + uri, (d) => {
        const mp3Uri = getMp3Uri(d);
        const txtArr = getTxt(d);
        // TODO store txt; get mp3 file, store
        myFetchMp3(mp3Uri, type, name, (d) => {
            console.log(d);
        }, (e) => {
            console.error(`get mp3 file error: ${ e.message }`);
        });
<<<<<<< HEAD
        
        mySaveFile(txtArr, type, name);
=======

        mySaveFile(txt, type, name);
>>>>>>> 62bb49ab4466231311c0418e41093a20386bd24f
    }, (e) => {
        console.error(`get mp3 path error: ${ e.message }`);
    })
};

var getTxt = function (rawTxt) {
    // too large for a string
    let strArr = [];
    let s = 0;
    let e = 0;
    while (s < rawTxt.length) {
        s = rawTxt.indexOf('<P>', e);
        if (-1 === s) {
            break;
        }
        s += 3;
        e = rawTxt.indexOf('</P>', s);
        strArr[strArr.length] = rawTxt.slice(s, e);
    }
<<<<<<< HEAD
=======

>>>>>>> 62bb49ab4466231311c0418e41093a20386bd24f
    return strArr;
};

var getMp3Uri = function (rawTxt) {
    const str = `<a id="mp3" href="(.*\\.mp3)" title="鼠标右键点击下载">`;
    const pattern = new RegExp(str, 'g');
    const match = pattern.exec(rawTxt);

    return match && match[1];
};
