import cors,{CorsOptions} from 'cors';
import express from 'express';
import bodyParser from 'body-parser'
// import userRouter from './routes/user.router';
// import authRouter from './routes/auth.router'
// import categoryRouter from './routes/category.router'
// import productRouter from './routes/product.router';
// import orderRouter from './routes/order.router';
var port = process.env.PORT || 8080;
const app = express();


/** CORS */
const allowedOrigins = ['http://localhost:3000'];
const options : CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

/** Body Parser */
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

/** Router */
// app.use('/api/user',userRouter);
// app.use('/api/auth',authRouter);
// app.use('/api/category',categoryRouter);
// app.use('/api/product',productRouter);
// app.use('/api/order',orderRouter);
app.get("/",(req,resp)=>{
    console.log("Hello Server")
    return "Hello server !";
})
/** App Running */
app.listen(port,()=>{
    console.log('UserAPI is runnning at ' + port);
});