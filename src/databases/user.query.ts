import { getConnection } from "../db";
import MyHelper from "../helper";
import User from "../models/user.model";

export default class UserQueries {
    static async createUser(user: User) {
        try {
            var connection = await getConnection();
            var sql = `INSERT INTO TCUSTOMERS 
            VALUES('${user.id}',N'${user.fullname}',
            '${user.username}','${user.password}',
            '${user.email}','${user.phoneNumber}',
            '${user.birthday}',N'${user.address}',
            '${user.role}')`;
            var [result,] = await connection.query(sql);
            console.log("createUser : " + result.affectedRows)
            if (Number(result.affectedRows) > 0) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(`error : ${error}`);
            return false;
        }
    }
    static async findByUsername(username: string): Promise<User | null> {
        var connection = await getConnection();
        try {
            var sql = `SELECT * FROM TCUSTOMERS WHERE username = '${username}'`;
            var [result,] = await connection.query(sql);
            return result[0];
        } catch (error) {
            return null;
        } finally {
            connection.end();
        }
    }
    static async updateUser(user: User) {
        console.log("UQ - updateUser")
        var connection = await getConnection();
        try {
            console.log("UQ - updateUser - try")
            var sql = `UPDATE tcustomers t SET t.fullname = '${user.fullname}', t.username = '${user.username}', 
            t.password = '${user.password}', t.email = '${user.email}', 
            t.phoneNumber = '${user.phoneNumber}',t.birthday = '${user.birthday}' WHERE t.id = '${user.id}'`;
            var [result,] = await connection.query(sql);
            console.log(sql)
            if (Number(result.affectedRows) > 0) {
                return user;
            }
            return null;
        } catch (error) {
            console.log(`error : ${error}`);
            return null;
        }
    }
    static async isUsernameExisted(username: string) {
        var connection = await getConnection();
        try {
            var sql = `SELECT * FROM tcustomers t WHERE t.username = '${username}'`;
            var [result,] = await connection.query(sql);
            if (result.length > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
        } finally {
            connection.end();
        }
    }
    static async isPhoneNumberExisted(phoneNumber: string) {
        var connection = await getConnection();
        try {
            var sql = `SELECT * FROM tcustomers t WHERE t.phoneNumber = '${phoneNumber}'`;
            var [result,] = await connection.query(sql);
            if (result.length > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
        } finally {
            connection.end();
        }
    }
    static async isEmailExisted(email: string) {
        var connection = await getConnection();
        try {

            var sql = `SELECT * FROM tcustomers t WHERE t.email = '${email}'`;
            var [result,] = await connection.query(sql);
            if (result.length > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
        } finally {
            connection.end();
        }
    }
}