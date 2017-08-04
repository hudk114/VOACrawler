/**
 * Created by dekaihu on 2017/8/1.
 * this is the business layer. for it's too easy, so put in one file.
 */
const http = require('http');
const myFetch = require('./myFetch.js');

const URI0 = 'http://www.51voa.com/VOA_Standard_English/';
const URI1 = 'http://www.51voa.com/VOA_Special_English/';

module.exports = function () {
    myFetch(URI0, (d) => {
        
        let arr = getListFromHtml(d);
        // TODO
        console.log(d);
    }, (e) => {
        console.log(e.message);
    });
}

var getListFromHtml = function (rawTxt) {
    // TODO 1\匹配当日时间 2\通过当日时间查找 3\匹配返回
    let arr = [];
    const dString = getDateString();
    const str = `<a href="(.{0,100}\.html)" target="_blank">(.{0,100})\\\(${dString}\\\)</a>`;
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
}

var getDateString = function () {
    const date = new Date();
    return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
}