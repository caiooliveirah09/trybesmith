import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { INewProduct } from '../interfaces/INewProduct';
import { IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  public registerNewProduct = async (newProduct: INewProduct): Promise<IProduct> => {
    const { name, amount } = newProduct;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...newProduct };
  };

  public getAllProducts = async (): Promise<IProduct[]> => {
    const [allProducts] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return allProducts;
  };
}