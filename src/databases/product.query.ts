import { getConnection } from "../db";
import { DBCONSTANTS } from '../constants/db.constant'
import MyHelper from "../helper";
export default class ProductQueries {
    static async getNewestProducts() {
        var sql: string = `select * from ${DBCONSTANTS.PRODUCTS_TABLE} limit 3`;
        var connection = await getConnection();
        const result = await connection.query(sql);
        MyHelper.dbLog(this.getNewestProducts.name, sql);
        return result[0];
    }
    static async getSizeByProductNo(productNo: string) {
        var sql = 'SELECT S.value FROM tproducts P JOIN tproductsize M ON P.no = M.product_no JOIN TSIZES S ON M.size_no = S.no '
            + `WHERE P.no =  ${productNo}`;
        var connection = await getConnection();
        var [result,] = await connection.query(sql);
        var returnValues = [];
        for (let index = 0; index < result.length; index++) {
            const value = result[index].value;
            returnValues.push(value);
        }
        MyHelper.dbLog(this.getSizeByProductNo.name,sql);
        return returnValues;
    }

    static async getColorsByProductNo(productNo: string) {
        var sql = 'SELECT C.value, C.name FROM TPRODUCTS P '
            + 'JOIN TPRODUCTCOLOR M ON P.no = M.product_no '
            + 'JOIN TCOLORS C ON M.color_no = C.no '
            + `WHERE P.no =  ${productNo}`;
        var connection = await getConnection();
        var [result,] = await connection.query(sql);
        var returnValues = [];
        for (let index = 0; index < result.length; index++) {
            const value = result[index].value;
            const name = result[index].name;
            returnValues.push({ value, name });
        }
        MyHelper.dbLog(this.getColorsByProductNo.name,sql);
        return returnValues;
    }

}