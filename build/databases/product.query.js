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
var helper_1 = __importDefault(require("../helper"));
var ProductQueries = /** @class */ (function () {
    function ProductQueries() {
    }
    ProductQueries.getNewestProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = "select * from tproducts  limit 3";
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = _a.sent();
                        helper_1.default.dbLog(this.getNewestProducts.name, sql);
                        return [2 /*return*/, result[0]];
                    case 4:
                        error_1 = _a.sent();
                        helper_1.default.errLog(this.getNewestProducts.name, error_1);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getSizeByProductNo = function (productNo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, returnValues, index, value, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = 'SELECT S.value FROM tproducts P JOIN tproductsize M ON P.no = M.product_no JOIN TSIZES S ON M.size_no = S.no '
                            + "WHERE P.no =  ".concat(productNo);
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        returnValues = [];
                        for (index = 0; index < result.length; index++) {
                            value = result[index].value;
                            returnValues.push(value);
                        }
                        helper_1.default.dbLog(this.getSizeByProductNo.name, sql);
                        return [2 /*return*/, returnValues];
                    case 4:
                        error_2 = _a.sent();
                        helper_1.default.errLog(this.getSizeByProductNo.name, error_2);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getColorsByProductNo = function (productNo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, returnValues, index, value, name, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = 'SELECT C.value, C.name FROM TPRODUCTS P '
                            + 'JOIN TPRODUCTCOLOR M ON P.no = M.product_no '
                            + 'JOIN TCOLORS C ON M.color_no = C.no '
                            + "WHERE P.no =  ".concat(productNo);
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        returnValues = [];
                        for (index = 0; index < result.length; index++) {
                            value = result[index].value;
                            name = result[index].name;
                            returnValues.push({ value: value, name: name });
                        }
                        helper_1.default.dbLog(this.getColorsByProductNo.name, sql);
                        return [2 /*return*/, returnValues];
                    case 4:
                        error_3 = _a.sent();
                        helper_1.default.errLog(this.getColorsByProductNo.name, error_3);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getProductsByFilter = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, cates, colors, sizes, price, cateFilterSql, colorFilterSql, sizeFilterSql, sql, i, i, i, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        cates = filter.cates, colors = filter.colors, sizes = filter.sizes, price = filter.price;
                        cateFilterSql = '';
                        colorFilterSql = '';
                        sizeFilterSql = '';
                        sql = 'SELECT P.no,P.name,P.price,P.description, P.quantity, '
                            + 'P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date FROM TPRODUCTS P '
                            + 'JOIN TPRODUCTSIZE SP ON P.no = SP.product_no '
                            + 'JOIN TSIZES S ON SP.size_no = S.no '
                            + 'JOIN TPRODUCTCOLOR PCO ON P.no = PCO.product_no '
                            + 'JOIN TCOLORS CO ON CO.no = PCO.color_no '
                            + 'JOIN TCATEGORIES CA ON P.cate_no = CA.no '
                            + 'WHERE P.quantity > 0 '
                            + "AND P.price >= ".concat(price.min, " AND P.price <= ").concat(price.max, " ");
                        console.log("cates lenght : " + filter.cates.length);
                        if (cates.length > 0) {
                            console.log("> 0");
                            cateFilterSql = "AND CA.name IN (";
                            for (i = 0; i < cates.length; i++) {
                                if (i !== (cates.length - 1)) {
                                    cateFilterSql += "'".concat(cates[i], "',");
                                }
                                else {
                                    cateFilterSql += "'".concat(cates[i], "'");
                                }
                            }
                            cateFilterSql += ") ";
                            sql += cateFilterSql;
                        }
                        if (colors.length > 0) {
                            console.log("> 0");
                            colorFilterSql = "AND CO.name IN (";
                            for (i = 0; i < colors.length; i++) {
                                if (i !== (colors.length - 1)) {
                                    colorFilterSql += "N'".concat(colors[i], "',");
                                }
                                else {
                                    colorFilterSql += "N'".concat(colors[i], "'");
                                }
                            }
                            colorFilterSql += ") ";
                            sql += colorFilterSql;
                        }
                        if (sizes.length > 0) {
                            console.log("> 0");
                            sizeFilterSql = "AND S.value IN (";
                            for (i = 0; i < sizes.length; i++) {
                                if (i !== (sizes.length - 1)) {
                                    sizeFilterSql += "'".concat(sizes[i], "',");
                                }
                                else {
                                    sizeFilterSql += "'".concat(sizes[i], "'");
                                }
                            }
                            sizeFilterSql += ") ";
                            sql += sizeFilterSql;
                        }
                        sql += "GROUP BY P.no,P.name,P.price,P.description, P.quantity, P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date LIMIT 3";
                        console.log(sql);
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log("getProductsByFilter : " + sql);
                        return [2 /*return*/, result];
                    case 4:
                        error_4 = _a.sent();
                        helper_1.default.errLog(this.getProductsByFilter.name, error_4);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getProductsByLikeName = function (searchValue, page) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, limit, offset, sql, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        limit = helper_1.default.getLimit(page);
                        offset = helper_1.default.getOffSet(page);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = 'SELECT * FROM TPRODUCTS P '
                            + "WHERE P.name LIKE  + '%".concat(searchValue, "%' ")
                            + 'ORDER BY P.insert_date '
                            + "LIMIT ".concat(limit, " ")
                            + "OFFSET ".concat(offset);
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        return [2 /*return*/, result];
                    case 4:
                        error_5 = _a.sent();
                        helper_1.default.errLog(this.getProductsByLikeName.name, error_5);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getProductByID = function (productNo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = 'SELECT * FROM TPRODUCTS P '
                            + "WHERE P.no = ".concat(productNo);
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        helper_1.default.dbLog(this.getProductByID.name, sql);
                        return [2 /*return*/, result[0]];
                    case 4:
                        error_6 = _a.sent();
                        helper_1.default.errLog(this.getProductByID.name, error_6);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    ProductQueries.getAllProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return ProductQueries;
}());
exports.default = ProductQueries;
