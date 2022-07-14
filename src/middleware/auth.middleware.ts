import { Request, Response, NextFunction } from 'express'
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from '../models/user.model';
dotenv.config();

export default class AuthMiddleware {
    static authenToken(request: Request, response: Response, next: NextFunction): void {
        const authorizationHeader: string = request.headers['authorization'] !== undefined ? request.headers['authorization'] : '';
        const token = authorizationHeader.split(' ')[1];
        console.log('Token : ' + token);
        if (!token) {
            response.sendStatus(401)
        } else {
            const secretKey = process.env.ACCESS_TOKEN_SECRET;
            if (secretKey) {
                JWT.verify(token, secretKey, (err, data) => {
                    if (err) response.sendStatus(401);
                    next();
                })
            }
        }
    }
    static generateToken(user: User): string {
        var secretKey = process.env.ACCESS_TOKEN_SECRET;
        var accessToken = '';
        if (secretKey) {
            accessToken = JWT.sign(user, secretKey, { expiresIn: '3600s', algorithm: 'HS256' });
        }
        return accessToken;
    }
    static generateRefreshToken(username: string, password: string): string {
        var secretKey = process.env.REFRESH_TOKEN_SECRET;
        var refreshToken = '';
        if (secretKey) {
            refreshToken = JWT.sign({ username, password }, secretKey, { expiresIn: '25200s', algorithm: 'HS256' });
        }
        return refreshToken;
    }
    static getUserByToken(token: string): User | null {
        if (token.includes('"'))
            token = token.substring(1, token.length - 1);
        var decodedToken = JWT.decode(token);
        if (decodedToken && typeof (decodedToken) === 'object') {
            var user: User = {
                id: Object.values(decodedToken)[0],
                fullname: Object.values(decodedToken)[1],
                username: Object.values(decodedToken)[2],
                password: Object.values(decodedToken)[3],
                email: Object.values(decodedToken)[4],
                phoneNumber: Object.values(decodedToken)[5],
                birthday: Object.values(decodedToken)[6],
                address: Object.values(decodedToken)[7],
                role: Object.values(decodedToken)[8]
            }
            console.log("user : " + Object.values(user));
            return user;
        }
        return null;
    }
}