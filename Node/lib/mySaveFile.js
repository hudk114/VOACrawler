/**
 * Created by dekaihu on 2017/8/16.
 */
 const fs = require('fs');
 const path = require('path');
 const commonFuncs = require('./commonFuncs');

 var createPath = function (txt, type, name) {
     const p = path.resolve(__dirname, `../files/${ commonFuncs.getDateString() }/${ type }`); // /${ name }`);
     const f = fs.createWriteStream(`${ p }/${ commonFuncs.fixName(name) }.txt`);

     // FIXME save file
 };

 module.exports = createPath;
