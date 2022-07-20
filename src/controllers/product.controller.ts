import { Request, RequestHandler, Response } from "express";
import ProductQueries from "../databases/product.query";
import { IFilter } from "../model";

export default class ProductController {
    static async getNewestProducts(request: Request, response: Response) {
        console.log("ProductController")
        const products = await ProductQueries.getNewestProducts();
        for (let i = 0; i < products.length; i++) {
            var sizes = await ProductQueries.getSizeByProductNo(products[i].no);
            var colors = await ProductQueries.getColorsByProductNo(products[i].no);
            products[i].sizes = sizes;
            products[i].colors = colors;
        }
        console.log(products)
        response.status(200).json({
            products
        })
    }
    static async getProductsByFilter(request: Request, response: Response) {
        var cates: Array<string> = request.body.cates;
        var sizes: Array<string> = request.body.sizes;
        var colors: Array<string> = request.body.colors;
        var price: {
            min: number,
            max: number
        } = request.body.price;
        var filter: IFilter = { cates, sizes, colors, price };
        console.log(filter)
        var products = await ProductQueries.getProductsByFilter(filter);
        for (let i = 0; i < products.length; i++) {
            var tmpSizes = await ProductQueries.getSizeByProductNo(products[i].no);
            var tmpColors = await ProductQueries.getColorsByProductNo(products[i].no);
            products[i].sizes = tmpSizes;
            products[i].colors = tmpColors;
        }
        console.log(products)
        return response.status(200).json({ products });
    }
    static async getProductsByLikeName(request: Request, response: Response) {
        var searchValue: string = request.params.searchValue;
        var page: number = Number(request.params.page);
        var products = await ProductQueries.getProductsByLikeName(searchValue, page);
        for (let i = 0; i < products.length; i++) {
            var tmpSizes = await ProductQueries.getSizeByProductNo(products[i].no);
            var tmpColors = await ProductQueries.getColorsByProductNo(products[i].no);
            products[i].sizes = tmpSizes;
            products[i].colors = tmpColors;
        }
        return response.json({
            products
        })
    }
    static async getProductByID(request: Request, response: Response) {
        var productNo: string = request.params.productNo;
        var product = await ProductQueries.getProductByID(productNo);
        var sizes = await ProductQueries.getSizeByProductNo(product.no);
        var colors = await ProductQueries.getColorsByProductNo(product.no);
        product.sizes = sizes;
        product.colors = colors;
        return response.json({
            product
        })
    }

}