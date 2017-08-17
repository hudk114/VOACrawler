/**
 * Created by dekaihu on 2017/8/8.
 */

var getDateString = function () {
    const date = new Date();
    return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
};

// name can't have /,\,:,*,?,",<,>,|
var fixName = function fixName(name) {
    const arr = name.split('').filter(item => {
        if('/' === item || '\\' === item || ':' === item || '*' === item
            || '?' === item || '"' === item || '<' === item || '>' === item
            || '|' === item) {
            return false;
        }
        return true;
    });
    return arr.join('');
};

module.exports = {
    getDateString,
    fixName,
};