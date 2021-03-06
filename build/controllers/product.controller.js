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
var product_query_1 = __importDefault(require("../databases/product.query"));
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.getNewestProducts = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ProductController");
                        return [4 /*yield*/, product_query_1.default.getNewestProducts()];
                    case 1:
                        products = _a.sent();
                        // for (let i = 0; i < products.length; i++) {
                        //     var sizes = await ProductQueries.getSizeByProductNo(products[i].no);
                        //     var colors = await ProductQueries.getColorsByProductNo(products[i].no);
                        //     products[i].sizes = sizes;
                        //     products[i].colors = colors;
                        // }
                        console.log(products);
                        response.status(200).json({
                            products: products
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductController.getProductsByFilter = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var cates, sizes, colors, price, pagination, filter, products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cates = request.body.filter.cates;
                        sizes = request.body.filter.sizes;
                        colors = request.body.filter.colors;
                        price = request.body.filter.price;
                        pagination = request.body.pagination;
                        filter = { cates: cates, sizes: sizes, colors: colors, price: price };
                        console.log(filter);
                        return [4 /*yield*/, product_query_1.default.getProductsByFilter(filter, pagination)];
                    case 1:
                        products = _a.sent();
                        console.log(products);
                        return [2 /*return*/, response.status(200).json({ products: products })];
                }
            });
        });
    };
    ProductController.getProductsByLikeName = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var searchValue, page, products, i, tmpSizes, tmpColors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        searchValue = request.params.searchValue;
                        page = Number(request.params.page);
                        return [4 /*yield*/, product_query_1.default.getProductsByLikeName(searchValue, page)];
                    case 1:
                        products = _a.sent();
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < products.length)) return [3 /*break*/, 6];
                        return [4 /*yield*/, product_query_1.default.getSizeByProductNo(products[i].no)];
                    case 3:
                        tmpSizes = _a.sent();
                        return [4 /*yield*/, product_query_1.default.getColorsByProductNo(products[i].no)];
                    case 4:
                        tmpColors = _a.sent();
                        products[i].sizes = tmpSizes;
                        products[i].colors = tmpColors;
                        _a.label = 5;
                    case 5:
                        i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/, response.json({
                            products: products
                        })];
                }
            });
        });
    };
    ProductController.getProductByID = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var productNo, product, sizes, colors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productNo = request.params.productNo;
                        return [4 /*yield*/, product_query_1.default.getProductByID(productNo)];
                    case 1:
                        product = _a.sent();
                        return [4 /*yield*/, product_query_1.default.getSizeByProductNo(product.no)];
                    case 2:
                        sizes = _a.sent();
                        return [4 /*yield*/, product_query_1.default.getColorsByProductNo(product.no)];
                    case 3:
                        colors = _a.sent();
                        product.sizes = sizes;
                        product.colors = colors;
                        return [2 /*return*/, response.json({
                                product: product
                            })];
                }
            });
        });
    };
    return ProductController;
}());
exports.default = ProductController;
