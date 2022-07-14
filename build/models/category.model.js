"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = /** @class */ (function () {
    function Category(no, name, insertID, insertDate, modifiedID, modifiedDate) {
        this.no = no;
        this.name = name;
        this.insertDate = insertDate;
        this.insertID = insertID;
        this.modifiedDate = modifiedDate;
        this.modifiedID = modifiedID;
    }
    return Category;
}());
exports.default = Category;
