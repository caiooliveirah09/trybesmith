import mysql from './connection';
import { RowDataPacket, ResultSetHeader } from "mysql2";
import { INewProduct } from '../interfaces/INewProduct';
import { IProducts } from '../interfaces/IProducts';

export default class ProductModel {
  private connection = mysql;

  public registerNewProduct = async (newProduct: INewProduct): Promise<INewProduct> => {
    const { name, amount } = newProduct;
    const [result] = await this.connection.execute<IProducts[] & RowDataPacket[]>('SELECT * FROM Trybesmith.Products;');
    console.log(result);
    return newProduct;
  };
}