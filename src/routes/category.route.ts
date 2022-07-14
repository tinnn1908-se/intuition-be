import { Router } from 'express'
import CategoryController from '../controllers/category.controller';
import AuthMiddleware from '../middleware/auth.middleware';
const categoryRouter = Router();
categoryRouter.post("/create",AuthMiddleware.authenToken,CategoryController.createCategory);
categoryRouter.get("/getAll",AuthMiddleware.authenToken,CategoryController.findAllCategories);
categoryRouter.get("/getCateByNo",AuthMiddleware.authenToken,CategoryController.findAllCategories);
export default categoryRouter;
