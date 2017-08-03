/**
 * Created by dekaihu on 2017/8/1.
 */
const http = require('http');

const URI0 = 'http://www.51voa.com/VOA_Standard_English/';
const URI1 = 'http://www.51voa.com/VOA_Special_English/';

module.exports = function (resolve) {
  http.get(URI0, (res) => {
    // console.log(res);
    let rawData = '';
    res.on('data', (chunk) => rawData += chunk);
    res.on('end', () => {
      /***
       * TODO 找到id='list'的，然后将其提取出来
       */
      // resolve(rawData);
      console.log(rawData);
    });
  }).on('error', e => console.log(e.message));
}