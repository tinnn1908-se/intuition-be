"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var AuthMiddleware = /** @class */ (function () {
    function AuthMiddleware() {
    }
    AuthMiddleware.authenToken = function (request, response, next) {
        var authorizationHeader = request.headers['authorization'] !== undefined ? request.headers['authorization'] : '';
        var token = authorizationHeader.split(' ')[1];
        console.log('Token : ' + token);
        if (!token) {
            response.sendStatus(401);
        }
        else {
            var secretKey = process.env.ACCESS_TOKEN_SECRET;
            if (secretKey) {
                jsonwebtoken_1.default.verify(token, secretKey, function (err, data) {
                    if (err)
                        response.sendStatus(401);
                    next();
                });
            }
        }
    };
    AuthMiddleware.generateToken = function (user) {
        var secretKey = process.env.ACCESS_TOKEN_SECRET;
        var accessToken = '';
        if (secretKey) {
            accessToken = jsonwebtoken_1.default.sign({ user: user }, secretKey, { expiresIn: '3600s', algorithm: 'HS256' });
        }
        return accessToken;
    };
    AuthMiddleware.generateRefreshToken = function (username, password) {
        var secretKey = process.env.REFRESH_TOKEN_SECRET;
        var refreshToken = '';
        if (secretKey) {
            refreshToken = jsonwebtoken_1.default.sign({ username: username, password: password }, secretKey, { expiresIn: '25200s', algorithm: 'HS256' });
        }
        return refreshToken;
    };
    AuthMiddleware.getUserByToken = function (token) {
        if (token.includes('"'))
            token = token.substring(1, token.length - 1);
        var decodedToken = jsonwebtoken_1.default.decode(token);
        if (decodedToken && typeof (decodedToken) === 'object') {
            var user = {
                id: Object.values(decodedToken)[0],
                fullname: Object.values(decodedToken)[1],
                username: Object.values(decodedToken)[2],
                password: Object.values(decodedToken)[3],
                email: Object.values(decodedToken)[4],
                phoneNumber: Object.values(decodedToken)[5],
                birthday: Object.values(decodedToken)[6],
                address: Object.values(decodedToken)[7],
                role: Object.values(decodedToken)[8]
            };
            console.log("user : " + Object.values(user));
            return user;
        }
        return null;
    };
    return AuthMiddleware;
}());
exports.default = AuthMiddleware;
