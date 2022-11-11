import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  public orderService = new OrderService();

  public getAllOrders = async (req: Request, res: Response) => {
    const { status, message } = await this.orderService.getAllOrders();
    res.status(status).json(message);
  };
}