/**
 * Created by dekaihu on 2017/11/22.
 */
const fs = require('fs');
const { getRootPath } = require('../lib/path-lib');
const { getDayString } = require('../lib/date-lib');

const deleteFile = function deleteFile(file) {
  // TODO callback
  fs.unlink(file);
};

const deleteFiles = function deleteFiles(fileList) {
  fileList.forEach(file => {
    deleteFile(file);
  });
};

const getFileListByDate = function getFileListByDate(date) {
  const judgeFile = function judgeFile(fileName, d) {
    // judge if contains the ture
    const pattern = new RegExp(`${d}`);
    return pattern.test(fileName);
  };

  const list = [];
  const d = getDayString(date);
  const specialPath = getRootPath('special', date);
  const specialFiles = fs.readdirSync(specialPath);
  const standardPath = getRootPath('standard', date);
  const standardFiles = fs.readdirSync(standardPath);

  specialFiles.forEach(fileName => {
    if (judgeFile(fileName, d)) {
      list.push(`${specialPath}/${fileName}`);
    }
  });
  standardFiles.forEach(fileName => {
    if (judgeFile(fileName, d)) {
      list.push(`${standardPath}/${fileName}`);
    }
  });
  return list;
};

module.exports = {
  deleteFiles,
  getFileListByDate
};
