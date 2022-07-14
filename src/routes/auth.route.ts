import { Router } from 'express'
var cors = require('cors')
const authRouter = Router();
import AuthController from '../controllers/auth.controller';
/** Routes */
authRouter.post("/register",AuthController.register);
authRouter.post("/authentication",AuthController.authenticate);
authRouter.post("/authorization",AuthController.authorize);

export default authRouter;