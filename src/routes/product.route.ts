import { Router } from "express";
import ProductController from "../controllers/product.controller";
const productRouter = Router();
productRouter.get('/getNewestProducts',ProductController.getNewestProducts);
productRouter.post('/getProductsByFilter',ProductController.getProductsByFilter);
productRouter.get('/getProductsByLikeName/:searchValue/:page',ProductController.getProductsByLikeName);
productRouter.get('/getProductByID/:productNo',ProductController.getProductByID);
export default productRouter;