import { Request, RequestHandler, Response } from "express";
import ProductQueries from "../databases/product.query";

export default class ProductController {
    static async getNewestProducts(req: Request, resp: Response) {
        console.log("ProductController")
        const products = await ProductQueries.getNewestProducts();
        for (let i = 0; i < products.length; i++) {
            var sizes = await ProductQueries.getSizeByProductNo(products[i].no);
            var colors = await ProductQueries.getColorsByProductNo(products[i].no);
            products[i].sizes = sizes;
            products[i].colors = colors;
        }
        resp.status(200).json({
            products
        })
    }
}