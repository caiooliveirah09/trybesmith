import { INewProduct } from '../interfaces/INewProduct';
import { IRes } from '../interfaces/IRes';
import statusCodes from '../utils/statusCodes';
import ProductModel from '../models/product.model';

export default class ProductService {
  public productModel = new ProductModel();

  public registerNewProduct = async (newProduct: INewProduct): Promise<IRes<object>> => {
    const newRegisteredProduct = await this.productModel.registerNewProduct(newProduct);
    return { status: statusCodes.OK, message: newRegisteredProduct };
  };
}