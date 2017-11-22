/**
 * Created by dekaihu on 2017/8/8.
 */

const toDoubleDigit = function toDoubleDigit(val) {
    return val < 10 ? `0${val.toString()}` : val.toString();
};

const getFullTimeString = function getFullTimeString() {
    const date = new Date();
    return `${date.getFullYear()}-${toDoubleDigit(date.getMonth() + 1)}-${toDoubleDigit(date.getDate())} ${toDoubleDigit(date.getHours())}:${toDoubleDigit(date.getMinutes())}:${toDoubleDigit(date.getSeconds())}`;
};
const getDateString = function getDateString() {
    const date = new Date();
    return `${date.getFullYear()}-${toDoubleDigit(date.getMonth() + 1)}-${toDoubleDigit(date.getDate())}`;
};
const getMonthString = function getMonthString(d) {
    const date = d ? new Date(d) : new Date();
    return `${date.getFullYear()}-${toDoubleDigit(date.getMonth() + 1)}`;
};
const getDayString = function getDayString(d) {
    const date = d ? new Date(d) : new Date();
    return `${toDoubleDigit(date.getDate())}`;
};

module.exports = {
    getMonthString,
    getDayString,
    getDateString,
    getFullTimeString,
};
