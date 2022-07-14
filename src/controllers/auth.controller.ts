import {Request,Response} from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.model';
import MyHelper from '../helper';
import UserQueries from '../databases/user.query';
import AuthMiddleware from '../middleware/auth.middleware';
export default class AuthController{
    static async register(request: Request, response: Response) {
        // Mapping user from request
        var user: User = {
            id: MyHelper.createUserID(),
            fullname: request.body.fullname,
            username: request.body.username,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            email: request.body.email,
            birthday: request.body.birthday,
            address: request.body.address,
            role: 'USER'
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;

        // Call database and return response
        var result = await UserQueries.createUser(user);
        console.log("Result : " + result)
        if (result) {
            return response.status(200).json(true);
        }
        return response.status(304).json("Create User Failed !");
    }
    static async authenticate(request: Request, response: Response) {
        console.log("username : " + request.body.username);
        var user = await UserQueries.findByUsername(request.body.username);
        var accessToken = null;
        var refreshToken = null;
        var isCorrectPassword = false;
        if (user) {
            isCorrectPassword = await bcrypt.compare(request.body.password, user.password);
            if (isCorrectPassword) {
                accessToken = AuthMiddleware.generateToken(user);
                refreshToken = AuthMiddleware.generateRefreshToken(user.username, user.password);
            }
        }

        if (accessToken) {
            return response.status(200).json({
                status: 200,
                accessToken,
                refreshToken
            })
        }
        return response.status(404).json({
            status: 404,
            msgErr: "User not found !"
        })
    }
    static async authorize(request: Request, response: Response) {
        var token = request.body.accessToken;
        console.log("authorize : " + token)
        if (token) {
            var user: User | null = AuthMiddleware.getUserByToken(token);
            console.log("user : " + typeof user + " - " + user);
            if (user) {
                return response.status(200).json({
                    status: 200,
                    user
                })
            }
            return response.status(404).json({
                status: 404,
                msgErr: "Authorize Failed !"
            })
        }
        return response.status(404).json({
            status: 404,
            msgErr: "Authorize Failed !"
        })
    }
}