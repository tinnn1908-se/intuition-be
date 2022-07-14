import { getConnection } from "../db";
import Category from "../models/category.model";

export default class CategoryQueries {
    static async createCategory(category: Category) {
        var connection = await getConnection();
        try {
            var sql = `INSERT INTO TCATEGORIES VALUES(
                '${category.no}','${category.name}',
                '${category.insertID}','${category.insertDate}',
                '${category.modifiedID}','${category.modifiedDate}'
            )`;
            var [result,] = await connection.query(sql);
            if (Number(result.affectedRows) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        } finally {
            connection.end();
        }
    }

    static async findAllCategories() {
        try {
            var connection = await getConnection();
            var sql = `SELECT * FROM TCATEGORIES`;
            var [result,] = await connection.query(sql);
            return result;
        } catch (error) {
            console.log(error)
            return null;
        }
    }

    static async findCategoryByCateID(cateNo: string) {
        try {
            var connection = await getConnection();
            var sql = `SELECT * FROM TCATEGORIES T WHERE T.NO = '${cateNo}'`;
            var [result,] = await connection.query(sql);
            return result[0];
        } catch (error) {
            console.log(error);
            return null;
        }
    }
}