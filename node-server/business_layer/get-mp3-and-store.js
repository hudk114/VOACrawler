/**
 * Created by dekaihu on 2017/8/5.
 */
const myFetch = require('../lib/my-fetch');
const fetchMp3 = require('./fetch-mp3');
const config = require('../config.json');
const { getFullPath } = require('../lib/path-lib');
const { saveTxt } = require('../lib/file-lib');
const { err } = require('../lib/log-lib');

const getTxt = function getTxt(rawTxt) {
  // too large for a string
  const strArr = [];
  let s = 0;
  let e = 0;
  while (s < rawTxt.length) {
    s = rawTxt.indexOf('<P>', e);
    if (s === -1) {
      break;
    }
    s += 3;
    e = rawTxt.indexOf('</P>', s);
    strArr[strArr.length] = rawTxt.slice(s, e);
  }

  return strArr;
};

const getMp3Uri = function getMp3Uri(rawTxt) {
  const str = '<a id="mp3" href="(.*\\.mp3)">';
  const pattern = new RegExp(str, 'g');
  const match = pattern.exec(rawTxt);

  return match && match[1];
};

module.exports = ({ uri, type, name }) => {
  myFetch(
    config.domain + uri,
    d => {
      const mp3Uri = getMp3Uri(d);
      fetchMp3(
        mp3Uri,
        type,
        name,
        d => {
          // console.log(d);
        },
        e => {
          err('Server', `get mp3 file error: ${e.message}`);
        }
      );
      saveTxt({
        txtArr: getTxt(d),
        file: getFullPath({ type, name, fileType: 'txt' })
      });
    },
    e => {
      err('Server', `get mp3 path error: ${e.message}`);
    }
  );
};
