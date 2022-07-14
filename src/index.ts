import cors, { CorsOptions } from 'cors';
import express from 'express';
import bodyParser from 'body-parser'
import ProductController from './routes/product.route';
import productRouter from './routes/product.route';
// import userRouter from './routes/user.router';
import authRouter from './routes/auth.route'
import categoryRouter from './routes/category.route';
// import productRouter from './routes/product.router';
// import orderRouter from './routes/order.router';
var port = process.env.PORT || 1908;
const app = express();


/** CORS */
const allowedOrigins = ['http://localhost:3000'];
const options: CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

/** Body Parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Router */
// app.use('/api/user',userRouter);
app.use('/api/auth', authRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
// app.use('/api/order',orderRouter);
app.get("/", (req, resp) => {
    console.log("Hello Server")
    return resp.status(200).json({
        data: "Hello Wolrd"
    });
})
/** App Running */
app.listen(port, () => {
    console.log('UserAPI is runnning at ' + port);
});