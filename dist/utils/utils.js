var utils = utils || {};
utils.utils = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/utils/utils.m.js
  var utils_m_exports = {};
  __export(utils_m_exports, {
    $dateObj: () => $dateObj,
    clone: () => clone,
    formatDate: () => formatDate,
    jsonFormat: () => jsonFormat,
    onOpen: () => onOpen
  });
  var formatDate = (date, fmt) => {
    if (!fmt)
      fmt = "yyyy-MM-dd hh:mm:ss";
    var o = {
      "Y+": date.getFullYear(),
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "H+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds(),
      "q+": Math.floor((date.getMonth() + 3) / 3),
      "S": date.getMilliseconds()
    };
    var week = {
      "0": "日",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + week[date.getDay() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }
    }
    return fmt;
  };
  var $dateObj = {
    dateVal: function() {
      return {
        hour: 24,
        second: 60,
        mills: 3600,
        format: "yyyy-MM-dd",
        dateFormat: "yyyy-MM-dd HH:mm:ss"
      };
    },
    toDate: function(date) {
      if (typeof date == "string") {
        date = date.replace(/-/g, ":").replace(" ", ":");
        date = date.split(":");
        if (date[3] != null && date[3] != "" && date[4] != null && date[4] != "" && date[5] != null && date[5] != "") {
          return new Date(date[0], date[1] - 1, date[2], date[3], date[4], date[5]);
        } else {
          return new Date(date[0], date[1] - 1, date[2]);
        }
      } else {
        return date;
      }
    },
    toString: function(date, pattern) {
      var d = this.toDate(date);
      return d.format(pattern);
    },
    isLeap: function(date) {
      var year = this.toDate(date).getFullYear();
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    dateRange: function(date1, date2) {
      var dateTime = this.numMillSecond(date1, date2);
      return new Date(dateTime).format("yyyy-MM-dd");
    },
    numYear: function(date1, date2) {
      var times = this.numDay(date1, date2);
      return Math.floor(times / 365);
    },
    numMonth: function(date1, date2) {
      var times = this.numDay(date1, date2);
      return Math.floor(times / 30);
    },
    numDay: function(date1, date2) {
      var times = this.numSecond(date1, date2);
      var hour = this.dateVal().hour;
      var mills = this.dateVal().mills;
      return Math.ceil(times / (mills * hour));
    },
    numHour: function(date1, date2) {
      return Math.floor(this.numMillSecond(date1, date2) / (1e3 * 60 * 60));
    },
    numMinute: function(date1, date2) {
      return Math.floor(this.numMillSecond(date1, date2) / (1e3 * 60));
    },
    numSecond: function(date1, date2) {
      return Math.floor(this.numMillSecond(date1, date2) / 1e3);
    },
    numMillSecond: function(date1, date2) {
      var stimes = this.getTime(this.toDate(date1));
      var etimes = this.getTime(this.toDate(date2));
      return etimes - stimes;
    },
    plusMillisSeconds: function(date, millisSeconds) {
      var dateTime = this.getTime(date);
      var mintimes = millisSeconds;
      var rdate = dateTime * 1 + mintimes * 1;
      return this.format(new Date(rdate));
    },
    plusSeconds: function(date, seconds) {
      var dateTime = this.getTime(date);
      var mintimes = seconds * 1e3;
      var rdate = dateTime * 1 + mintimes * 1;
      return this.format(new Date(rdate));
    },
    plusMinutes: function(date, minutes) {
      var dateTime = this.getTime(date);
      var mintimes = minutes * 60 * 1e3;
      var rdate = dateTime * 1 + mintimes * 1;
      return this.format(new Date(rdate));
    },
    plusHours: function(date, hours) {
      var dateTime = this.getTime(date);
      var mintimes = hours * 60 * 60 * 1e3;
      var rdate = dateTime + mintimes;
      return this.format(new Date(rdate));
    },
    plusDays: function(date, days) {
      var dateTime = this.getTime(date);
      var mintimes = days * 60 * 60 * 1e3 * 24;
      var rdate = dateTime * 1 + mintimes * 1;
      return this.format(new Date(rdate));
    },
    plusMonths: function(date, months) {
      var dateTime = this.getTime(date);
      var mintimes = months * 30 * 60 * 60 * 1e3 * 24;
      var rdate = dateTime + mintimes * 1;
      return this.format(new Date(rdate));
    },
    plusYears: function(date, years, isLeap) {
      var dateTime = this.getTime(date);
      var day = 365;
      if (isLeap)
        day = 366;
      var mintimes = years * day * 60 * 60 * 1e3 * 24;
      var rdate = dateTime + mintimes;
      return this.format(new Date(rdate));
    },
    plusDate: function(date1, date2) {
      var dateTime = this.getTime(date1);
      var dateTime2 = this.getTime(date2);
      ;
      var rdate = dateTime + dateTime2;
      return this.format(new Date(rdate));
    },
    minusMillisSeconds: function(date, millisSeconds) {
      var dateTime = this.getTime(date);
      var mintimes = millisSeconds * 1;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusSeconds: function(date, seconds) {
      var dateTime = this.getTime(date);
      var mintimes = seconds * 1e3;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusMinutes: function(date, minutes) {
      var dateTime = this.getTime(date);
      var mintimes = minutes * 60 * 1e3;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusHours: function(date, hours) {
      var dateTime = this.getTime(date);
      var mintimes = hours * 60 * 60 * 1e3;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusDays: function(date, days) {
      var dateTime = this.getTime(date);
      var mintimes = days * 60 * 60 * 1e3 * 24;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusMonths: function(date, months) {
      var dateTime = this.getTime(date);
      var mintimes = months * 30 * 60 * 60 * 1e3 * 24;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusYears: function(date, years, isLeap) {
      var dateTime = this.getTime(date);
      var day = 365;
      if (isLeap)
        day = 366;
      var mintimes = years * day * 60 * 60 * 1e3 * 24;
      var rdate = dateTime - mintimes;
      return this.format(new Date(rdate));
    },
    minusDate: function(date1, date2) {
      var dateTime = this.getTime(date1);
      var dateTime2 = this.getTime(date2);
      ;
      var rdate = dateTime - dateTime2;
      return this.format(new Date(rdate));
    },
    getMonthDays: function(date1) {
      var currentMonth = this.getFirstDayOfMonth(date1);
      var nextMonth = this.getNextDayOfMonth(date1);
      return this.numDay(currentMonth, nextMonth);
    },
    getYearDays: function(date) {
      var firstDayYear = this.getFirstDayOfYear(date);
      var lastDayYear = this.getLastDayOfYear(date);
      return Math.ceil(this.numDay(firstDayYear, lastDayYear));
    },
    getDayOfYear: function(date1) {
      return Math.ceil(this.numDay(this.getFirstDayOfYear(date1), date1));
    },
    getDayOfMonth: function(date1) {
      return Math.ceil(this.numDay(this.getFirstDayOfMonth(date1), date1));
    },
    getDayOfYearWeek: function(date) {
      var numdays = this.getDayOfYear(date);
      return Math.ceil(numdays / 7);
    },
    getDayOfWeek: function(date1) {
      return this.getWeek(date1);
    },
    getHourOfDay: function(date) {
      return this.getHour(date);
    },
    eq: function(date1, date2) {
      var stime = this.getTime(this.toDate(date1));
      var etime = this.getTime(this.toDate(date2));
      return stime == etime ? true : false;
    },
    after: function(date1, date2) {
      var stime = this.getTime(this.toDate(date1));
      var etime = this.getTime(this.toDate(date2));
      return stime < etime ? true : false;
    },
    before: function(date1, date2) {
      var stime = this.getTime(this.toDate(date1));
      var etime = this.getTime(this.toDate(date2));
      return stime > etime ? true : false;
    },
    getFirstDayOfYear: function(date) {
      var year = this.getYear(date);
      var dateString = year + "-01-01 00:00:00";
      return dateString;
    },
    getLastDayOfYear: function(date) {
      var year = this.getYear(date);
      var dateString = year + "-12-01 00:00:00";
      var endDay = this.getMonthDays(dateString);
      return year + "-12-" + endDay + " 23:59:59";
    },
    getFirstDayOfSeason: function(date) {
      var seasonNum = this.getSeasonNum(date);
      var year = this.getYear(date);
      switch (seasonNum) {
        case 1:
          return year + "-01-01 00:00:00";
        case 2:
          return year + "-04-01 00:00:00";
        case 3:
          return year + "-07-01 00:00:00";
        case 4:
          return year + "-10-01 00:00:00";
      }
    },
    getSeasonStartDate: function(year, season) {
      switch (season) {
        case 1:
          return year + "-01-01";
        case 2:
          return year + "-04-01";
        case 3:
          return year + "-07-01";
        case 4:
          return year + "-10-01";
      }
    },
    getLastDayOfSeason: function(date) {
      var seasonNum = this.getSeasonNum(date);
      var year = this.getYear(date);
      switch (seasonNum) {
        case 1:
          return year + "-03-31 23:59:59";
        case 2:
          return year + "-06-30 23:59:59";
        case 3:
          return year + "-09-30 23:59:59";
        case 4:
          return year + "-12-31 23:59:59";
      }
    },
    getSeasonEndDate: function(year, season) {
      switch (season) {
        case 1:
          return year + "-03-31";
        case 2:
          return year + "-06-30";
        case 3:
          return year + "-09-30";
        case 4:
          return year + "-12-31";
      }
    },
    getFirstDayOfMonth: function(date) {
      var year = this.getYear(date);
      var month = this.getMonth(date);
      var dateString = year + "-" + month + "-01 00:00:00";
      return dateString;
    },
    getMonthStartDate: function(year, month) {
      var monthStartDate = new Date(year, month - 1, 1);
      return formatTime2(monthStartDate, "yyyy-MM-dd");
    },
    getLastDayOfMonth: function(date) {
      var endDay = this.getMonthDays(date);
      var year = this.getYear(date);
      var month = this.getMonth(date);
      return year + "-" + month + "-" + endDay + " 23:59:59";
    },
    getMonthEndDate: function(year, month) {
      var monthStartDate = new Date(year, month - 1, 1);
      var monthEndDate = new Date(year, month, 1);
      var days = (monthEndDate - monthStartDate) / (1e3 * 60 * 60 * 24);
      var monthEndDate = new Date(year, month - 1, days);
      return formatTime2(monthEndDate, "yyyy-MM-dd");
    },
    getFirstOfWeek: function(date1) {
      var week = this.getWeek(date1);
      var date = this.minusDays(date1, week);
      var year = this.getYear(date);
      var month = this.getMonth(date);
      var date = this.getDay(date);
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    getLastOfWeek: function(date1) {
      var week = 6 - this.getWeek(date1);
      var date = this.minusDays(date1, week);
      var year = this.getYear(date);
      var month = this.getMonth(date);
      var date = this.getDay(date);
      return year + "-" + month + "-" + date + " 23:59:59";
    },
    getFirstOfDay: function(date) {
      var year = this.getYear(date);
      var month = this.getMonth(date);
      var date = this.getDay(date);
      return year + "-" + month + "-" + date + " 00:00:00";
    },
    getLastOfDay: function(date) {
      var year = this.getYear(date);
      var month = this.getMonth(date);
      var date = this.getDay(date);
      return year + "-" + month + "-" + date + " 23:59:59";
    },
    getNextDayOfMonth: function(date) {
      var year = this.getYear(date);
      var month = this.getMonth(date);
      month = month * 1 + 1;
      if (month > 12) {
        year = year + 1;
        month = month - 12;
      }
      month = month > 9 ? month : "0" + month;
      var dateString = year + "-" + month + "-01 00:00:00";
      return dateString;
    },
    getNow: function() {
      return new Date();
    },
    format: function(date) {
      return this.getYear(date) + "-" + this.getMonth(date) + "-" + this.getDay(date) + " " + this.getHour(date) + ":" + this.getMinute(date) + ":" + this.getSecond(date);
    },
    getDate: function() {
      return this.getNow();
    },
    getYear: function(date) {
      return this.toDate(date).getFullYear();
    },
    getMonth: function(date) {
      var month = this.toDate(date).getMonth() + 1;
      return month > 9 ? month : "0" + month;
    },
    getDay: function(date) {
      var day = this.toDate(date).getDate();
      return day > 9 ? day : "0" + day;
    },
    getWeek: function(date) {
      return this.toDate(date).getDay();
    },
    getHour: function(date) {
      var hour = this.toDate(date).getHours();
      return hour > 9 ? hour : "0" + hour;
    },
    getHour12: function(date) {
      var hour = this.toDate(date).getHours();
      return hour % 12 == 0 ? 12 : hour % 12;
    },
    getMinute: function(date) {
      var minutes = this.toDate(date).getMinutes();
      return minutes > 9 ? minutes : "0" + minutes;
    },
    getSecond: function(date) {
      var seconds = this.toDate(date).getSeconds();
      return seconds > 9 ? seconds : "0" + seconds;
    },
    getMillisecond: function(date) {
      return this.toDate(date).getMilliseconds();
    },
    getSeasonNum: function(date) {
      var month = this.getMonth(date) * 1 - 1;
      return Math.floor((month + 3) / 3);
    },
    getLastSeasonNum: function(season) {
      if (season == 1) {
        return 4;
      } else {
        return season - 1;
      }
    },
    weekToChinese: function(date) {
      var nowWeek = this.getWeek(date);
      var day = "";
      switch (nowWeek) {
        case 0:
          day = "日";
          break;
          break;
        case 1:
          day = "一";
          break;
          break;
        case 2:
          day = "二";
          break;
          break;
        case 3:
          day = "三";
          break;
          break;
        case 4:
          day = "四";
          break;
          break;
        case 5:
          day = "五";
          break;
          break;
        case 6:
          day = "六";
          break;
      }
      return day;
    },
    getTime: function(date) {
      return this.toDate(date).getTime();
    },
    getZoneNameValue: function(date) {
      var arr = this.toDate(date).toString().match(/([A-Z]+)([-+]\d+:?\d+)/);
      return {
        "name": arr[1],
        "value": arr[2]
      };
    },
    getTimeDistance: function(time) {
      if (typeof time == "number" || Number(time) == time) {
        if (String(time).length == 10) {
          time = Number(time) * 1e3;
        } else if (String(time).length == 13) {
          time = Number(time);
        } else {
          console.log("时间格式错误");
          return time;
        }
      } else {
        if (typeof time == "string" && time.split(" ").length == 2 && time.split(/[- : \/]/).length == 6) {
          time = new Date(time.replace(/\-/g, "/")).getTime();
        } else {
          console.log("时间格式错误");
          return time;
        }
      }
      var date_now = new Date();
      var date_time = new Date(time);
      var distance = date_now.getTime() - time;
      var days = parseInt(distance / (1e3 * 60 * 60 * 24));
      if (days == 1) {
        return "昨天";
      } else if (days > 1 && days < 4) {
        return days + "天前";
      } else if (days > 3) {
        var year = date_time.getFullYear();
        var month = date_time.getMonth() + 1;
        if (month < 10) {
          month = "0" + month;
        }
        var day = date_time.getDate();
        if (day < 10) {
          day = "0" + day;
        }
        if (date_now.getFullYear() == year) {
          return month + "-" + day;
        } else {
          return year + "-" + month + "-" + day;
        }
      }
      var hours = parseInt(distance % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
      if (hours > 0) {
        return hours + "小时前";
      }
      var minutes = parseInt(distance % (1e3 * 60 * 60) / (1e3 * 60));
      if (minutes > 0) {
        return minutes + "分钟前";
      }
      ;
      return "刚刚";
    }
  };
  var clone = (obj) => {
    var o, i, j, k;
    if (typeof obj != "object" || obj === null)
      return obj;
    if (obj instanceof Array) {
      o = [];
      i = 0;
      j = obj.length;
      for (; i < j; i++) {
        if (typeof obj[i] == "object" && obj[i] != null) {
          o[i] = clone(obj[i]);
        } else {
          o[i] = obj[i];
        }
      }
    } else {
      o = {};
      for (i in obj) {
        if (typeof obj[i] == "object" && obj[i] != null) {
          o[i] = clone(obj[i]);
        } else {
          o[i] = obj[i];
        }
      }
    }
    return o;
  };
  var jsonFormat = (json) => {
    let maxLength = 5e4;
    let compress = "";
    let txt = clone(json);
    let indentChar = "    ";
    if (/^\s*$/.test(txt)) {
      console.log("数据为空,无法格式化! ");
      return;
    }
    try {
      var data = eval("(" + txt + ")");
    } catch (e) {
      console.log("数据源语法错误,格式化失败! 错误信息: " + e.description, "err");
      return;
    }
    let draw = [], last = false, This = void 0, line = compress ? "" : "\n", nodeCount = 0, maxDepth = 0;
    let notify = function(name, value, isLast2, indent2, formObj) {
      nodeCount++;
      for (var i = 0, tab = ""; i < indent2; i++)
        tab += indentChar;
      tab = compress ? "" : tab;
      maxDepth = ++indent2;
      if (value && value.constructor == Array) {
        draw.push(tab + (formObj ? '"' + name + '":' : "") + "[" + line);
        for (let i2 = 0; i2 < value.length; i2++)
          notify(i2, value[i2], i2 == value.length - 1, indent2, false);
        draw.push(tab + "]" + (isLast2 ? line : "," + line));
      } else if (value && typeof value == "object") {
        draw.push(tab + (formObj ? '"' + name + '":' : "") + "{" + line);
        let len = 0, i2 = 0;
        for (let key in value)
          len++;
        for (let key in value)
          notify(key, value[key], ++i2 == len, indent2, true);
        draw.push(tab + "}" + (isLast2 ? line : "," + line));
      } else {
        if (typeof value == "string")
          value = '"' + value + '"';
        draw.push(tab + (formObj ? '"' + name + '":' : "") + value + (isLast2 ? "" : ",") + line);
      }
    };
    let isLast = true, indent = 0;
    notify("", data, isLast, indent, false);
    val = draw.join("");
    return val;
  };
  var onOpen = (appid, mid, param) => {
    let SubPortal = new ssdev.ux.portal.SubPortal();
    SubPortal.$portal = $portal;
    return SubPortal.onOpen(appid, mid, param);
  };
  return __toCommonJS(utils_m_exports);
})();
//# sourceMappingURL=utils/utils.js.map