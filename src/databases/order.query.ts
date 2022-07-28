import { getConnection } from '../db';
import Order from '../models/order.model'
import OrderDetail from '../models/orderDetail.model';
export default class OrderQueries {
    static async createOrder(order: Order) {
        var connection = await getConnection();
        try {
            var sql = 'INSERT INTO TORDERS '
                + `VALUES('${order.no}',N'${order.address}',`
                + `${order.quantity},NULL,${order.payment_method},`
                + `'${order.subtotal}','${order.user_id}','${order.phoneNumber}',`
                + `N'${order.fullname}',${order.status},'${order.insert_date}',NULL)`;
            var [result,] = await connection.query(sql);
            if (Number(result.affectedRows) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    static async createOrderDetail(orderDetail: OrderDetail) {
        var connection = await getConnection();
        try {
            var sql = 'INSERT INTO TPRODUCTORDER '
                + `VALUES('${orderDetail.orderNo}','${orderDetail.productNo}',`
                + `${orderDetail.quantity},'${orderDetail.color}',${orderDetail.total})`;
            var [result,] = await connection.query(sql);
            if (Number(result.affectedRows) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
    static async getOrderByPhoneNumber(phoneNumber: string) {
        var connection = await getConnection();
        try {
            var sql = "SELECT o.no, o.address, o.quantity, o.payment_method, o.subtotal, o.status, o.insert_date "
                + "FROM torders o "
                + `WHERE o.phoneNumber = '${phoneNumber}'`;
            var [result,] = await connection.query(sql);
            console.log("result : " + result);
            console.log(sql)
            return result;
        } catch (error) {

        } finally {
            connection.end();
        }
    }
    static async getOrderDetailsByOrderNo(orderNo: string) {
        var connection = await getConnection();
        try {
            var sql = "SELECT p.name, p.price, po.quantity, po.total FROM torders o "
                + " JOIN tproductorder po ON o.no = po.order_no "
                + " JOIN tproducts p ON p.no = po.product_no "
                + `WHERE o.no = '${orderNo}'`;
            var [result,] = await connection.query(sql);
            console.log("result : " + result);
            console.log(sql)
            return result;
        } catch (error) {

        } finally {
            connection.end();
        }
    }
    static async updateOrderStatus(status: number, orderNo: string) {
        var connection = await getConnection();
        try {
            var sql = `UPDATE torders o SET o.status = ${status} WHERE o.no = '${orderNo}'`;
            var [result,] = await connection.query(sql);
            console.log("result : " + result);
            if (Number(result.affectedRows) > 0) {
                return true;
            }
            return false;
        } catch (error) {
            
        } finally {
            connection.end();
        }
    }
}