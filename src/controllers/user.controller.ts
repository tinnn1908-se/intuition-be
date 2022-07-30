import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcryptjs'
import UserQueries from "../databases/user.query";
import { APPLICATIONCONSTANT } from "../constants/app,constant";

export default class UserController {
    static async updateUser(request: Request, response: Response) {
        console.log("UC - updateUser")
        var username = request.body.username;
        var phoneNumber = request.body.phoneNumber;
        var email = request.body.email;
        var errors: Array<number> = [];
        if (await UserQueries.isUsernameExisted(username)) {
            errors.push(APPLICATIONCONSTANT.ERR_USERNAME_IS_USED);
        }
        if (await UserQueries.isPhoneNumberExisted(phoneNumber)) {
            errors.push(APPLICATIONCONSTANT.ERR_PHONE_NUMBER_IS_USED);
        }
        if (await UserQueries.isEmailExisted(email)) {
            errors.push(APPLICATIONCONSTANT.ERR_EMAIL_IS_USED);
        }
        if (errors.length === 0) {
            var user: User = {
                id: request.body.id,
                fullname: request.body.fullname,
                username: username,
                password: request.body.password,
                phoneNumber: phoneNumber,
                email: email,
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
        } else {
            return response.status(304).json({ errors });
        }
    }
}