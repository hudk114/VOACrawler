/**
 * Created by dekaihu on 2017/8/5.
 */
const http = require('http');
const { getFullPath } = require('../lib/path-lib');
const { saveMp3 } = require('../lib/file-lib');

const myFetchMp3 = function myFetchMp3(uri, type, name, fn, fnErr) {
  http
    .get(uri, res => {
      if (res.statusCode === 302) {
        // redirect
        myFetchMp3(res.headers.location, type, name, fn, fnErr);
        return;
      }

      saveMp3({
        uri,
        file: getFullPath({ type, name, fileType: 'mp3' })
      });

      fn && fn(res);
    })
    .on('error', fnErr);
};

module.exports = myFetchMp3;
