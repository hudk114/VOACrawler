/**
 * Created by dekaihu on 2017/11/6.
 */
const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();
const { log } = require('../lib/log-lib');
const crawlFiles = require('../business_layer/crawl-files');

rule.hour = 23;
rule.minute = 30;

const projectTask = function projectTask() {
  log('Server', 'schedule start');
  crawlFiles();
};

const project = schedule.scheduleJob(rule, projectTask);

module.exports = project;
