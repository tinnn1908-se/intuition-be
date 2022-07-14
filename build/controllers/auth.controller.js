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
var helper_1 = __importDefault(require("../helper"));
var user_query_1 = __importDefault(require("../databases/user.query"));
var auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.register = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user, salt, hashPassword, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = {
                            id: helper_1.default.createUserID(),
                            fullname: request.body.fullname,
                            username: request.body.username,
                            password: request.body.password,
                            phoneNumber: request.body.phoneNumber,
                            email: request.body.email,
                            birthday: request.body.birthday,
                            address: request.body.address,
                            role: 'USER'
                        };
                        return [4 /*yield*/, bcryptjs_1.default.genSalt(10)];
                    case 1:
                        salt = _a.sent();
                        return [4 /*yield*/, bcryptjs_1.default.hash(user.password, salt)];
                    case 2:
                        hashPassword = _a.sent();
                        user.password = hashPassword;
                        return [4 /*yield*/, user_query_1.default.createUser(user)];
                    case 3:
                        result = _a.sent();
                        console.log("Result : " + result);
                        if (result) {
                            return [2 /*return*/, response.status(200).json(true)];
                        }
                        return [2 /*return*/, response.status(304).json("Create User Failed !")];
                }
            });
        });
    };
    AuthController.authenticate = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var user, accessToken, refreshToken, isCorrectPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("username : " + request.body.username);
                        return [4 /*yield*/, user_query_1.default.findByUsername(request.body.username)];
                    case 1:
                        user = _a.sent();
                        accessToken = null;
                        refreshToken = null;
                        isCorrectPassword = false;
                        if (!user) return [3 /*break*/, 3];
                        console.log(user);
                        return [4 /*yield*/, bcryptjs_1.default.compare(request.body.password, user.password)];
                    case 2:
                        isCorrectPassword = _a.sent();
                        if (isCorrectPassword) {
                            accessToken = auth_middleware_1.default.generateToken(user);
                            refreshToken = auth_middleware_1.default.generateRefreshToken(user.username, user.password);
                        }
                        _a.label = 3;
                    case 3:
                        if (accessToken) {
                            return [2 /*return*/, response.status(200).json({
                                    accessToken: accessToken,
                                    refreshToken: refreshToken
                                })];
                        }
                        return [2 /*return*/, response.status(404).json({
                                status: 404,
                                msgErr: "User not found !"
                            })];
                }
            });
        });
    };
    AuthController.authorize = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var token, user;
            return __generator(this, function (_a) {
                token = request.body.accessToken;
                console.log("authorize : " + token);
                if (token) {
                    user = auth_middleware_1.default.getUserByToken(token);
                    console.log("user : " + typeof user + " - " + user);
                    if (user) {
                        return [2 /*return*/, response.status(200).json({ user: user })];
                    }
                    return [2 /*return*/, response.status(404).json({
                            msgErr: "Authorize Failed !"
                        })];
                }
                return [2 /*return*/, response.status(404).json({
                        msgErr: "Authorize Failed !"
                    })];
            });
        });
    };
    return AuthController;
}());
exports.default = AuthController;
