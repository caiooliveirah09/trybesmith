import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  public productService = new ProductService();

  public registerNewProduct = async (req: Request, res: Response) => {
    const newProduct = req.body;
    const { status, message } = await this.productService.registerNewProduct(newProduct);
    res.status(status).json(message);
  };

  public getAllProducts = async (req: Request, res: Response) => {
    const { status, message } = await this.productService.getAllProducts();
    res.status(status).json(message);
  };
}