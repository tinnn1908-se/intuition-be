"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyHelper = /** @class */ (function () {
    function MyHelper() {
    }
    MyHelper.isEmpty = function (rows) {
        if (!rows || rows.length === 0) {
            return [];
        }
        return rows;
    };
    MyHelper.dbLog = function (fncName, sql) {
        console.log("".concat(fncName, " : ").concat(sql));
    };
    MyHelper.errLog = function (fncName, err) {
        console.log("".concat(fncName, " : ").concat(err));
    };
    // qpo : quantity loading per one
    MyHelper.getOffSet = function (currPage, qlpo) {
        if (currPage === void 0) { currPage = 1; }
        return ((currPage - 1) * qlpo);
    };
    MyHelper.getLimit = function (currPage, qlpo) {
        if (currPage === void 0) { currPage = 1; }
        return (currPage * qlpo);
    };
    MyHelper.createUserID = function () {
        var dateObj = new Date();
        return dateObj.getTime().toString();
    };
    MyHelper.getCurrentDateTime = function () {
        var dateObj = new Date();
        var second = dateObj.getSeconds();
        var minute = dateObj.getMinutes();
        var hour = dateObj.getHours();
        var month = dateObj.getMonth() + 1; //months from 1-12
        var day = dateObj.getDate();
        var year = dateObj.getFullYear();
        var returnValue = "".concat(day, "/").concat(month, "/").concat(year, " ").concat(hour, ":").concat(minute, ":").concat(second);
        return returnValue;
    };
    return MyHelper;
}());
exports.default = MyHelper;
