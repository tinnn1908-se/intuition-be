"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_controller_1 = __importDefault(require("../controllers/order.controller"));
var orderRouter = (0, express_1.Router)();
// controller go here
orderRouter.post('/createOrder', order_controller_1.default.createOrder);
orderRouter.post('/createOrderDetail', order_controller_1.default.createOrderDetail);
orderRouter.get('/getOrderByPhoneNumber/:phoneNumber', order_controller_1.default.getOrderByPhoneNumber);
orderRouter.get('/getOrderDetailsByOrderNo/:orderNo', order_controller_1.default.getOrderDetailsByOrderNo);
orderRouter.put('/updateOrderStatus/:status/:orderNo', order_controller_1.default.updateOrderStatus);
exports.default = orderRouter;
