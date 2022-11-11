import { RowDataPacket } from 'mysql2';
import { IOrdersWithProduct } from '../interfaces/IOrdersWithProduct';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  public getAllOrders = async (): Promise<IOrdersWithProduct[]> => {
    const [allOrders] = await this.connection.execute<IOrdersWithProduct[] & RowDataPacket[]>(
      `SELECT Orders.id, Orders.userId,
      JSON_ARRAYAGG(Products.id) AS productsIds FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products
      ON Trybesmith.Orders.id = Trybesmith.Products.orderId
      GROUP BY Orders.id;`,
    );
    return allOrders;
  };
}