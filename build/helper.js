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
    return MyHelper;
}());
exports.default = MyHelper;
