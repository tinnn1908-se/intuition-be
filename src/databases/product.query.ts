import { getConnection } from "../db";
export default class ProductQueries {
    static async getNewestProducts() {
        var sql : string = "select * from tproducts limit 3";
        console.log("ProductQueries")
        var connection = await getConnection();
        const products = await connection.query(sql);
        return products;
    }
}