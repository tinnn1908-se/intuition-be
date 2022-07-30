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
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var user_query_1 = __importDefault(require("../databases/user.query"));
var app_constant_1 = require("../constants/app,constant");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.updateUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var username, phoneNumber, email, errors, user, salt, hashPassword, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("UC - updateUser");
                        username = request.body.username;
                        phoneNumber = request.body.phoneNumber;
                        email = request.body.email;
                        errors = [];
                        return [4 /*yield*/, user_query_1.default.isUsernameExisted(username)];
                    case 1:
                        if (_a.sent()) {
                            errors.push(app_constant_1.APPLICATIONCONSTANT.ERR_USERNAME_IS_USED);
                        }
                        return [4 /*yield*/, user_query_1.default.isPhoneNumberExisted(phoneNumber)];
                    case 2:
                        if (_a.sent()) {
                            errors.push(app_constant_1.APPLICATIONCONSTANT.ERR_PHONE_NUMBER_IS_USED);
                        }
                        return [4 /*yield*/, user_query_1.default.isEmailExisted(email)];
                    case 3:
                        if (_a.sent()) {
                            errors.push(app_constant_1.APPLICATIONCONSTANT.ERR_EMAIL_IS_USED);
                        }
                        if (!(errors.length === 0)) return [3 /*break*/, 7];
                        user = {
                            id: request.body.id,
                            fullname: request.body.fullname,
                            username: username,
                            password: request.body.password,
                            phoneNumber: phoneNumber,
                            email: email,
                            birthday: request.body.birthday,
                            address: request.body.address,
                            role: 'USER'
                        };
                        return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                    case 4:
                        salt = _a.sent();
                        return [4 /*yield*/, bcryptjs_1.default.hash(user.password, salt)];
                    case 5:
                        hashPassword = _a.sent();
                        user.password = hashPassword;
                        return [4 /*yield*/, user_query_1.default.updateUser(user)];
                    case 6:
                        result = _a.sent();
                        if (result !== null)
                            return [2 /*return*/, response.json({ user: user })];
                        return [2 /*return*/, response.status(304).json(null)];
                    case 7: return [2 /*return*/, response.status(304).json({ errors: errors })];
                }
            });
        });
    };
    return UserController;
}());
exports.default = UserController;
