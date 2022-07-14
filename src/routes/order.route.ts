import { Router } from "express";
import OrderController from "../controllers/order.controller";
const orderRouter = Router();
// controller go here
orderRouter.post('/createOrder',OrderController.createOrder);
orderRouter.post('/createOrderDetail',OrderController.createOrderDetail);
export default orderRouter;