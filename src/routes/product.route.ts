import { Router } from "express";
import ProductController from "../controllers/product.controller";
const productRouter = Router();
productRouter.get('/getNewestProducts',ProductController.getNewestProducts);
productRouter.post('/getProductsByFilter',ProductController.getProductsByFilter);
export default productRouter;