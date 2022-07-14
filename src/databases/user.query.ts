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
    // static async findAllUsers(): Promise<Array<User> | null> {
    //     try {
    //         var connection = await DBConnect.connect(DBConfig);
    //         var sql = `SELECT * FROM TCUSTOMERS`;
    //         var result = await connection.request().query(sql);
    //         return result.recordset;
    //     } catch (error) {
    //         console.log(`error : ${error}`);
    //         return null;
    //     }
    // }
}