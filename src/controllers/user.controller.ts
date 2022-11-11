import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  public userService = new UserService();

  public registerNewUser = async (req: Request, res: Response) => {
    const newUser = req.body;
    const { status, message } = await this.userService.registerNewUser(newUser);
    res.status(status).json(message);
  };
}