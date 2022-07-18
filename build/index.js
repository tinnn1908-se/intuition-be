"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var product_route_1 = __importDefault(require("./routes/product.route"));
var auth_route_1 = __importDefault(require("./routes/auth.route"));
var category_route_1 = __importDefault(require("./routes/category.route"));
var order_route_1 = __importDefault(require("./routes/order.route"));
var port = process.env.PORT || 1908;
var app = (0, express_1.default)();
/** CORS */
var allowedOrigins = ['http://localhost:3000', 'https://intuition-be.herokuapp.com'];
var options = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: '*'
};
app.use((0, cors_1.default)(options));
/** Body Parser */
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
/** Router */
// app.use('/api/user',userRouter);
app.use('/api/auth', auth_route_1.default);
app.use('/api/category', category_route_1.default);
app.use('/api/product', product_route_1.default);
app.use('/api/order', order_route_1.default);
// app.get("/", (req, resp) => {
//     console.log("Hello Server")
//     return resp.status(200).json({
//         data: "Hello Wolrd"
//     });
// })
/** App Running */
app.listen(port, function () {
    console.log('UserAPI is runnning at ' + port);
});
