import { Request, Response } from 'express';
import CategoryQueries from '../databases/category.queries';
import MyHelper from '../helper';
import Category from '../models/category.model';
export default class CategoryController {

    static async createCategory(request: Request, response: Response) {
        var category: Category = {
            no: request.body.no,
            name: request.body.name,
            insertID: request.body.insertID,
            insertDate: MyHelper.getCurrentDateTime(),
            modifiedID: '',
            modifiedDate: ''
        }
        var result = await CategoryQueries.createCategory(category);
        return response.json(result);
    }

    static async findCategoryByCateID(request: Request, response: Response) {
        var cateNo: string = request.body.catetID;
        var result = await CategoryQueries.findCategoryByCateID(cateNo);
        return response.json({ data: result })
    }

    static async findAllCategories(request: Request, response: Response) {
        var result = await CategoryQueries.findAllCategories();
        return response.json({ data: result });
    }

}