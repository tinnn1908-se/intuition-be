"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = __importDefault(require("../helper"));
var order_query_1 = __importDefault(require("../databases/order.query"));
var OrderController = /** @class */ (function () {
    function OrderController() {
    }
    OrderController.createOrder = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = {
                            no: request.body.no,
                            address: request.body.address,
                            fullname: request.body.fullname,
                            phoneNumber: request.body.phoneNumber,
                            promotion_id: request.body.promotionID,
                            user_id: request.body.userID,
                            payment_method: Number(request.body.paymentMethod),
                            quantity: request.body.quantity,
                            status: Number(request.body.status),
                            subtotal: request.body.subTotal,
                            insert_date: helper_1.default.getCurrentDateTime(),
                            modified_date: ''
                        };
                        console.log(order.phoneNumber);
                        return [4 /*yield*/, order_query_1.default.createOrder(order)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json(result)];
                }
            });
        });
    };
    OrderController.createOrderDetail = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orderDetail, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderDetail = {
                            orderNo: request.body.orderNo,
                            productNo: request.body.productNo,
                            quantity: request.body.quantity,
                            color: request.body.color,
                            total: request.body.total
                        };
                        return [4 /*yield*/, order_query_1.default.createOrderDetail(orderDetail)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json(result)];
                }
            });
        });
    };
    OrderController.getOrderByPhoneNumber = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var phoneNumber, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        phoneNumber = request.params.phoneNumber;
                        console.log("getOrderByNo");
                        return [4 /*yield*/, order_query_1.default.getOrderByPhoneNumber(phoneNumber)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json({
                                "orders": result
                            })];
                }
            });
        });
    };
    OrderController.getOrderDetailsByOrderNo = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orderNo, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderNo = request.params.orderNo;
                        console.log("getOrderByNo");
                        return [4 /*yield*/, order_query_1.default.getOrderDetailsByOrderNo(orderNo)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json({
                                "orderDetails": result
                            })];
                }
            });
        });
    };
    OrderController.updateOrderStatus = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var orderNo, status, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        orderNo = request.params.orderNo;
                        status = request.params.status;
                        console.log("getOrderByNo");
                        return [4 /*yield*/, order_query_1.default.updateOrderStatus(Number(status), orderNo)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, response.json({ result: result })];
                }
            });
        });
    };
    return OrderController;
}());
exports.default = OrderController;
