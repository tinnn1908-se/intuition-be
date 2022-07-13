import { getConnection } from "../db";
import {DBCONSTANTS} from '../constants/db.constant'
export default class ProductQueries {
    static async getNewestProducts() {
        var sql : string = `select * from ${DBCONSTANTS.PRODUCTS_TABLE} limit 3`;
        console.log("ProductQueries")
        var connection = await getConnection();
        const products = await connection.query(sql);
        return products;
    }
}