/**
 * Created by dekaihu on 2017/8/5.
 */
const fs = require('fs');

module.exports = function (fileName, filePath, data) {
    // fs.createWriteStream(fileName);
    fs.writeFile(fileName, data, {
        encoding: 'utf8'
    }, (e) => {
        if(e) console.error(e);
        fs.readFile(fileName, (e, d) => {
            if(e) console.error(e);
            console.log(d);
        });
    });
}