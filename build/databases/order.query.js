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
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../db");
var OrderQueries = /** @class */ (function () {
    function OrderQueries() {
    }
    OrderQueries.createOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        sql = 'INSERT INTO TORDERS '
                            + "VALUES('".concat(order.no, "',N'").concat(order.address, "',")
                            + "".concat(order.quantity, ",NULL,").concat(order.payment_method, ",")
                            + "'".concat(order.subtotal, "','").concat(order.user_id, "','").concat(order.phoneNumber, "',")
                            + "N'".concat(order.fullname, "',").concat(order.status, ",'").concat(order.insert_date, "',NULL)");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        if (Number(result.affectedRows) > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderQueries.createOrderDetail = function (orderDetail) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        sql = 'INSERT INTO TPRODUCTORDER '
                            + "VALUES('".concat(orderDetail.orderNo, "','").concat(orderDetail.productNo, "',")
                            + "".concat(orderDetail.quantity, ",'").concat(orderDetail.color, "',").concat(orderDetail.total, ")");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        if (Number(result.affectedRows) > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OrderQueries.getOrderByPhoneNumber = function (phoneNumber) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = "SELECT o.no, o.address, o.quantity, o.payment_method, o.subtotal, o.status, o.insert_date "
                            + "FROM torders o "
                            + "WHERE o.phoneNumber = '".concat(phoneNumber, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log("result : " + result);
                        console.log(sql);
                        return [2 /*return*/, result];
                    case 4:
                        error_3 = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderQueries.getOrderDetailsByOrderNo = function (orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = "SELECT p.name, p.price, po.quantity, po.total FROM torders o "
                            + " JOIN tproductorder po ON o.no = po.order_no "
                            + " JOIN tproducts p ON p.no = po.product_no "
                            + "WHERE o.no = '".concat(orderNo, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log("result : " + result);
                        console.log(sql);
                        return [2 /*return*/, result];
                    case 4:
                        error_4 = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    OrderQueries.updateOrderStatus = function (status, orderNo) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = "UPDATE torders o SET o.status = ".concat(status, " WHERE o.no = '").concat(orderNo, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log("result : " + result);
                        if (Number(result.affectedRows) > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_5 = _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return OrderQueries;
}());
exports.default = OrderQueries;
