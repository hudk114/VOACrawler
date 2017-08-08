/**
 * Created by dekaihu on 2017/8/8.
 */

var getDateString = function () {
    const date = new Date();
    return `${ date.getFullYear() }-${ date.getMonth() + 1 }-${ date.getDate() }`;
};

module.exports = {
    getDateString,
};