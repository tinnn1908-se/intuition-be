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
    MyHelper.getOffSet = function (currPage) {
        if (currPage === void 0) { currPage = 1; }
        return ((currPage - 1) * 5);
    };
    MyHelper.getLimit = function (currPage) {
        if (currPage === void 0) { currPage = 1; }
        return (currPage * 5);
    };
    MyHelper.createUserID = function () {
        var dateObj = new Date();
        return dateObj.getTime().toString();
    };
    return MyHelper;
}());
exports.default = MyHelper;
