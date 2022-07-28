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
            promotion_id : request.body.promotionID,
            user_id : request.body.userID,
            payment_method : Number(request.body.paymentMethod),
            quantity : request.body.quantity,
            status : Number(request.body.status),
            subtotal : request.body.subTotal,
            insert_date : MyHelper.getCurrentDateTime(),
            modified_date : ''
        }
        console.log(order.phoneNumber)
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
    static async getOrderByPhoneNumber(request : Request, response : Response){
        var phoneNumber = request.params.phoneNumber;
        console.log("getOrderByNo")
        var result = await OrderQueries.getOrderByPhoneNumber(phoneNumber);
        return response.json({
            "orders" : result
        })
    }
    static async getOrderDetailsByOrderNo(request : Request, response : Response){
        var orderNo = request.params.orderNo;
        console.log("getOrderByNo")
        var result = await OrderQueries.getOrderDetailsByOrderNo(orderNo);
        return response.json({
            "orderDetails" : result
        })
    }
    static async updateOrderStatus(request : Request, response : Response){
        var orderNo = request.params.orderNo;
        var status = request.params.status;
        console.log("getOrderByNo")
        var result = await OrderQueries.updateOrderStatus(Number(status),orderNo);
        return response.json({result});
    }
    
    
}
