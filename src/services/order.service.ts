import { IRes } from '../interfaces/IRes';
import statusCodes from '../utils/statusCodes';
import OrderModel from '../models/order.model';
import { IOrdersWithProduct } from '../interfaces/IOrdersWithProduct';

export default class OrderService {
  public orderModel = new OrderModel();

  public getAllOrders = async (): Promise<IRes<IOrdersWithProduct[]>> => {
    const allOrders = await this.orderModel.getAllOrders();
    return { status: statusCodes.OK, message: allOrders };
  };
}