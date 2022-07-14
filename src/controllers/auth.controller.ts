import {Request,Response} from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.model';
import MyHelper from '../helper';
import UserQueries from '../databases/user.query';
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
    static async authenticate(){
    }
    static async authorize(){

    }
}