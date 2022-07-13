import { Router } from "express";
import ProductController from "../controllers/product.controller";
const productRouter = Router();
productRouter.get('/getNewestProducts',ProductController.getNewestProducts);
export default productRouter;