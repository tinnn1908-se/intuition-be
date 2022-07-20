import { getConnection } from "../db";
import { DBCONSTANTS } from '../constants/db.constant'
import MyHelper from "../helper";
import { IFilter } from "../model";
export default class ProductQueries {
    static async getNewestProducts() {
        var connection = await getConnection();
        try {
            var sql: string = `select * from tproducts  limit 3`;
            const result = await connection.query(sql);
            MyHelper.dbLog(this.getNewestProducts.name, sql);
            return result[0];
        } catch (error) {
            MyHelper.errLog(this.getNewestProducts.name, error);
        } finally {
            connection.end();
        }

    }
    static async getSizeByProductNo(productNo: string) {
        var connection = await getConnection();
        try {
            var sql = 'SELECT S.value FROM tproducts P JOIN tproductsize M ON P.no = M.product_no JOIN TSIZES S ON M.size_no = S.no '
                + `WHERE P.no =  ${productNo}`;
            var [result,] = await connection.query(sql);
            var returnValues = [];
            for (let index = 0; index < result.length; index++) {
                const value = result[index].value;
                returnValues.push(value);
            }
            MyHelper.dbLog(this.getSizeByProductNo.name, sql);
            return returnValues;
        } catch (error) {
            MyHelper.errLog(this.getSizeByProductNo.name, error);
        } finally {
            connection.end();
        }
    }
    static async getColorsByProductNo(productNo: string) {
        var connection = await getConnection();
        try {
            var sql = 'SELECT C.value, C.name FROM TPRODUCTS P '
                + 'JOIN TPRODUCTCOLOR M ON P.no = M.product_no '
                + 'JOIN TCOLORS C ON M.color_no = C.no '
                + `WHERE P.no =  ${productNo}`;

            var [result,] = await connection.query(sql);
            var returnValues = [];
            for (let index = 0; index < result.length; index++) {
                const value = result[index].value;
                const name = result[index].name;
                returnValues.push({ value, name });
            }
            MyHelper.dbLog(this.getColorsByProductNo.name, sql);
            return returnValues;
        } catch (error) {
            MyHelper.errLog(this.getColorsByProductNo.name, error);
        } finally {
            connection.end();
        }
    }
    static async getProductsByFilter(filter: IFilter) {
        var connection = await getConnection();
        try {
            var { cates, colors, sizes, price } = filter;
            var cateFilterSql = '';
            var colorFilterSql = '';
            var sizeFilterSql = '';
            var sql = 'SELECT P.no,P.name,P.price,P.description, P.quantity, '
                + 'P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date FROM TPRODUCTS P '
                + 'JOIN TPRODUCTSIZE SP ON P.no = SP.product_no '
                + 'JOIN TSIZES S ON SP.size_no = S.no '
                + 'JOIN TPRODUCTCOLOR PCO ON P.no = PCO.product_no '
                + 'JOIN TCOLORS CO ON CO.no = PCO.color_no '
                + 'JOIN TCATEGORIES CA ON P.cate_no = CA.no '
                + 'WHERE P.quantity > 0 '
                + `AND P.price >= ${price.min} AND P.price <= ${price.max} `
            console.log("cates lenght : " + filter.cates.length)
            if (cates.length > 0) {
                console.log("> 0");
                cateFilterSql = `AND CA.name IN (`;
                for (let i = 0; i < cates.length; i++) {
                    if (i !== (cates.length - 1)) {
                        cateFilterSql += `'${cates[i]}',`
                    } else {
                        cateFilterSql += `'${cates[i]}'`
                    }
                }
                cateFilterSql += ") ";
                sql += cateFilterSql;
            }
            if (colors.length > 0) {
                console.log("> 0");
                colorFilterSql = `AND CO.name IN (`;
                for (let i = 0; i < colors.length; i++) {
                    if (i !== (colors.length - 1)) {
                        colorFilterSql += `N'${colors[i]}',`
                    } else {
                        colorFilterSql += `N'${colors[i]}'`
                    }
                }
                colorFilterSql += ") ";
                sql += colorFilterSql;
            }
            if (sizes.length > 0) {
                console.log("> 0");
                sizeFilterSql = `AND S.value IN (`;
                for (let i = 0; i < sizes.length; i++) {
                    if (i !== (sizes.length - 1)) {
                        sizeFilterSql += `'${sizes[i]}',`
                    } else {
                        sizeFilterSql += `'${sizes[i]}'`
                    }
                }
                sizeFilterSql += ") ";
                sql += sizeFilterSql;
            }
            sql += "GROUP BY P.no,P.name,P.price,P.description, P.quantity, P.entp_no, P.cate_no,P.insert_id,P.insert_date,P.modify_id,P.modified_date LIMIT 3";
            console.log(sql);
            var [result,] = await connection.query(sql);
            console.log("getProductsByFilter : " + sql);
            return result;
        } catch (error) {
            MyHelper.errLog(this.getProductsByFilter.name, error);
        } finally {
            connection.end();
        }
    }
    static async getProductsByLikeName(searchValue: string, page: number) {
        var connection = await getConnection();
        var limit = MyHelper.getLimit(page);
        var offset = MyHelper.getOffSet(page);
        try {
            var sql = 'SELECT * FROM TPRODUCTS P '
                + `WHERE P.name LIKE  + '%${searchValue}%' `
                + 'ORDER BY P.insert_date '
                + `LIMIT ${limit} `
                + `OFFSET ${offset}`
            var [result,] = await connection.query(sql);
            return result;
        } catch (error) {
            MyHelper.errLog(this.getProductsByLikeName.name, error);
        } finally {
            connection.end();
        }
    }
    static async getProductByID(productNo: string) {
        var connection = await getConnection();
        try {
            var sql = 'SELECT * FROM TPRODUCTS P '
                + `WHERE P.no = ${productNo}`;
            var [result,] = await connection.query(sql);
            MyHelper.dbLog(this.getProductByID.name,sql);
            return result[0];
        } catch (error) {
            MyHelper.errLog(this.getProductByID.name,error);
        } finally {
            connection.end();
        }
    }
    static async getAllProducts() {
        
    }
}