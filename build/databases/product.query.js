"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var db_constant_1 = require("../constants/db.constant");
var helper_1 = __importDefault(require("../helper"));
var ProductQueries = /** @class */ (function () {
    function ProductQueries() {
    }
    ProductQueries.getNewestProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sql, connection, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select * from ".concat(db_constant_1.DBCONSTANTS.PRODUCTS_TABLE, " limit 3");
                        return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = _a.sent();
                        helper_1.default.dbLog(this.getNewestProducts.name, sql);
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    ProductQueries.getSizeByProductNo = function (productNo) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, connection, result, returnValues, index, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT S.value FROM tproducts P JOIN tproductsize M ON P.no = M.product_no JOIN TSIZES S ON M.size_no = S.no '
                            + "WHERE P.no =  ".concat(productNo);
                        return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = (_a.sent())[0];
                        returnValues = [];
                        for (index = 0; index < result.length; index++) {
                            value = result[index].value;
                            returnValues.push(value);
                        }
                        helper_1.default.dbLog(this.getSizeByProductNo.name, sql);
                        return [2 /*return*/, returnValues];
                }
            });
        });
    };
    ProductQueries.getColorsByProductNo = function (productNo) {
        return __awaiter(this, void 0, void 0, function () {
            var sql, connection, result, returnValues, index, value, name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = 'SELECT C.value, C.name FROM TPRODUCTS P '
                            + 'JOIN TPRODUCTCOLOR M ON P.no = M.product_no '
                            + 'JOIN TCOLORS C ON M.color_no = C.no '
                            + "WHERE P.no =  ".concat(productNo);
                        return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = (_a.sent())[0];
                        returnValues = [];
                        for (index = 0; index < result.length; index++) {
                            value = result[index].value;
                            name = result[index].name;
                            returnValues.push({ value: value, name: name });
                        }
                        helper_1.default.dbLog(this.getColorsByProductNo.name, sql);
                        return [2 /*return*/, returnValues];
                }
            });
        });
    };
    return ProductQueries;
}());
exports.default = ProductQueries;
