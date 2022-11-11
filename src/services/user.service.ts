import { INewUser } from '../interfaces/INewUser';
import { IRes } from '../interfaces/IRes';
import UserModel from '../models/user.model';
import statusCodes from '../utils/statusCodes';
import Jwt from '../utils/jwt';
import { IToken } from '../interfaces/IToken';

export default class UserService {
  public userModel = new UserModel();

  public jwt = new Jwt();

  public registerNewUser = async (newUser: INewUser): Promise<IRes<IToken>> => {
    const newRegisteredUser = await this.userModel.registerNewUser(newUser);
    const token = this.jwt.generateToken(newRegisteredUser);
    return { status: statusCodes.CREATED, message: { token } };
  };
}