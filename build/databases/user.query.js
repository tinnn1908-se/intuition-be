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
var UserQueries = /** @class */ (function () {
    function UserQueries() {
    }
    UserQueries.createUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        sql = "INSERT INTO TCUSTOMERS \n            VALUES('".concat(user.id, "',N'").concat(user.fullname, "',\n            '").concat(user.username, "','").concat(user.password, "',\n            '").concat(user.email, "','").concat(user.phoneNumber, "',\n            '").concat(user.birthday, "',N'").concat(user.address, "',\n            '").concat(user.role, "')");
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = (_a.sent())[0];
                        console.log("createUser : " + result.affectedRows);
                        if (Number(result.affectedRows) > 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("error : ".concat(error_1));
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserQueries.findByUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 6]);
                        sql = "SELECT * FROM TCUSTOMERS WHERE username = '".concat(username, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        return [2 /*return*/, result[0]];
                    case 4:
                        error_2 = _a.sent();
                        return [2 /*return*/, null];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserQueries.updateUser = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("UQ - updateUser");
                        return [4 /*yield*/, (0, db_1.getConnection)()];
                    case 1:
                        connection = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        console.log("UQ - updateUser - try");
                        sql = "UPDATE tcustomers t SET t.fullname = '".concat(user.fullname, "', t.username = '").concat(user.username, "', \n            t.password = '").concat(user.password, "', t.email = '").concat(user.email, "', \n            t.phoneNumber = '").concat(user.phoneNumber, "',t.birthday = '").concat(user.birthday, "' WHERE t.id = '").concat(user.id, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        console.log(sql);
                        if (Number(result.affectedRows) > 0) {
                            return [2 /*return*/, user];
                        }
                        return [2 /*return*/, null];
                    case 4:
                        error_3 = _a.sent();
                        console.log("error : ".concat(error_3));
                        return [2 /*return*/, null];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserQueries.isUsernameExisted = function (username) {
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
                        sql = "SELECT * FROM tcustomers t WHERE t.username = '".concat(username, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserQueries.isPhoneNumberExisted = function (phoneNumber) {
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
                        sql = "SELECT * FROM tcustomers t WHERE t.phoneNumber = '".concat(phoneNumber, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_5 = _a.sent();
                        console.log(error_5);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    UserQueries.isEmailExisted = function (email) {
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
                        sql = "SELECT * FROM tcustomers t WHERE t.email = '".concat(email, "'");
                        return [4 /*yield*/, connection.query(sql)];
                    case 3:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/, false];
                    case 4:
                        error_6 = _a.sent();
                        console.log(error_6);
                        return [3 /*break*/, 6];
                    case 5:
                        connection.end();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return UserQueries;
}());
exports.default = UserQueries;
