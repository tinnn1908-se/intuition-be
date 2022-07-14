"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyHelper = /** @class */ (function () {
    function MyHelper() {
    }
    MyHelper.getOffset = function (currPage, listPerPage) {
        if (currPage === void 0) { currPage = 1; }
        return ((currPage - 1) * listPerPage);
    };
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
    return MyHelper;
}());
exports.default = MyHelper;
