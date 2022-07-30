import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcryptjs'
import UserQueries from "../databases/user.query";

export default class UserController {
    static async updateUser(request: Request, response: Response) {
        console.log("UC - updateUser")
        var user: User = {
            id: request.body.id,
            fullname: request.body.fullname,
            username: request.body.username,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            email: request.body.email,
            birthday: request.body.birthday,
            address: request.body.address,
            role: 'USER'
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, salt);
        user.password = hashPassword;
        var result = await UserQueries.updateUser(user);
        if (result !== null)
            return response.json({ user })
        return response.status(304).json(null);
    }
}