import Order from "../models/order.model";
import OrderDetail from "../models/orderDetail.model";
import { Request,Response } from "express";
import MyHelper from "../helper";
import OrderQueries from "../databases/order.query";

export default class OrderController {
    static async createOrder(request : Request, response : Response){
        var order : Order = {
            no : request.body.no,
            address : request.body.address,
            fullname : request.body.fullname,
            phoneNumber : request.body.phoneNumber,
            promotionID : request.body.promotionID,
            userID : request.body.userID,
            paymentMethod : Number(request.body.paymentMethod),
            quantity : request.body.quantity,
            status : Number(request.body.status),
            subTotal : request.body.subTotal,
            insertDate : MyHelper.getCurrentDateTime(),
            modifiedDate : ''
        }
        var result = await OrderQueries.createOrder(order);
        return response.json(result)
    }

    static async createOrderDetail(request : Request, response : Response){
        var orderDetail : OrderDetail = {
            orderNo : request.body.orderNo,
            productNo : request.body.productNo,
            quantity : request.body.quantity,
            color : request.body.color,
            total : request.body.total
        }
        var result = await OrderQueries.createOrderDetail(orderDetail);
        return response.json(result)
    }
}
