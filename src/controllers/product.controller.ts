import { Request, RequestHandler, Response } from "express";
import ProductQueries from "../databases/product.query";

export default class ProductController {
    static async getNewestProducts(req: Request, resp: Response) {
        console.log("ProductController")
        const products = await ProductQueries.getNewestProducts();
        console.log(products);
        resp.status(200).json({
            products
        })
    }
}