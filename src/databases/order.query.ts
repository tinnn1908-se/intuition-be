import { getConnection } from '../db';
import Order from '../models/order.model'
import OrderDetail from '../models/orderDetail.model';
export default class OrderQueries {
    static async createOrder(order: Order) {
        var connection = await getConnection();
        try {
            var sql = 'INSERT INTO TORDERS '
                + `VALUES('${order.no}',N'${order.address}',`
                + `${order.quantity},NULL,${order.paymentMethod},`
                + `'${order.subTotal}','${order.userID}','${order.phoneNumber}',`
                + `N'${order.fullname}',${order.status},'${order.insertDate}',NULL)`;
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
}