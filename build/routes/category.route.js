"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var category_controller_1 = __importDefault(require("../controllers/category.controller"));
var auth_middleware_1 = __importDefault(require("../middleware/auth.middleware"));
var categoryRouter = (0, express_1.Router)();
categoryRouter.post("/create", auth_middleware_1.default.authenToken, category_controller_1.default.createCategory);
categoryRouter.get("/getAll", auth_middleware_1.default.authenToken, category_controller_1.default.findAllCategories);
categoryRouter.get("/getCateByNo", auth_middleware_1.default.authenToken, category_controller_1.default.findAllCategories);
exports.default = categoryRouter;
