import { Router } from "express";
import OrderController from "../controllers/order.controller";
const orderRouter = Router();
// controller go here
orderRouter.post('/createOrder',OrderController.createOrder);
orderRouter.post('/createOrderDetail',OrderController.createOrderDetail);
orderRouter.get('/getOrderByPhoneNumber/:phoneNumber',OrderController.getOrderByPhoneNumber);
orderRouter.get('/getOrderDetailsByOrderNo/:orderNo',OrderController.getOrderDetailsByOrderNo);
orderRouter.put('/updateOrderStatus/:status/:orderNo',OrderController.updateOrderStatus);
export default orderRouter;