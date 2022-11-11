import { INewProduct } from '../interfaces/INewProduct';
import { IRes } from '../interfaces/IRes';
import statusCodes from '../utils/statusCodes';
import ProductModel from '../models/product.model';
import { IProduct } from '../interfaces/IProduct';

export default class ProductService {
  public productModel = new ProductModel();

  public registerNewProduct = async (newProduct: INewProduct): Promise<IRes<IProduct>> => {
    const newRegisteredProduct = await this.productModel.registerNewProduct(newProduct);
    return { status: statusCodes.CREATED, message: newRegisteredProduct };
  };

  public getAllProducts = async (): Promise<IRes<IProduct[]>> => {
    const allProducts = await this.productModel.getAllProducts();
    return { status: statusCodes.OK, message: allProducts };
  };
}