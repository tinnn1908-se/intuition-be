"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var product_route_1 = __importDefault(require("./routes/product.route"));
// import userRouter from './routes/user.router';
// import authRouter from './routes/auth.router'
// import categoryRouter from './routes/category.router'
// import productRouter from './routes/product.router';
// import orderRouter from './routes/order.router';
var port = process.env.PORT || 1908;
var app = (0, express_1.default)();
/** CORS */
var allowedOrigins = ['http://localhost:3000'];
var options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
/** Body Parser */
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
/** Router */
// app.use('/api/user',userRouter);
// app.use('/api/auth',authRouter);
// app.use('/api/category',categoryRouter);
app.use('/api/product', product_route_1.default);
// app.use('/api/order',orderRouter);
app.get("/", function (req, resp) {
    console.log("Hello Server");
    return resp.status(200).json({
        data: "Hello Wolrd"
    });
});
/** App Running */
app.listen(port, function () {
    console.log('UserAPI is runnning at ' + port);
});
