"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product.controller"));
var productRouter = (0, express_1.Router)();
productRouter.get('/getNewestProducts', product_controller_1.default.getNewestProducts);
productRouter.post('/getProductsByFilter', product_controller_1.default.getProductsByFilter);
productRouter.get('/getProductsByLikeName/:searchValue/:page', product_controller_1.default.getProductsByLikeName);
productRouter.get('/getProductByID/:productNo', product_controller_1.default.getProductByID);
exports.default = productRouter;
