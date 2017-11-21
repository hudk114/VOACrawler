/**
 * Created by dekaihu on 2017/11/6.
 */
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
rule.hour = 23;
rule.minute = 30;

const crawlFiles = require('../business_layer/crawl-files');

const projectTask = function projectTask() {
    const getDate = function getDate() {
        const fixTime = function fixTime(val) {
            return parseInt(val, val) < 10 ? '0' + val : val.toString();
        };
        const date = new Date();
        return `${date.getFullYear()}-${fixTime(date.getMonth() + 1)}-${fixTime(date.getDate())} ${fixTime(date.getHours())}:${fixTime(date.getMinutes())}`;
    };
    
    console.log(`schedule start: ${getDate()}`);
    crawlFiles();
};

const project = schedule.scheduleJob(rule, projectTask);

module.exports = project;