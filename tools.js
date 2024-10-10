//This is a tool module, currently there is only one method for processing dates

const getCurrentTime=function(){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    month = month < 10 ? '0' + month : month;
    date = date < 10 ? '0' + date : date;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    var currentDateTime = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return currentDateTime;
  }

module.exports = {
    getCurrentTime
};