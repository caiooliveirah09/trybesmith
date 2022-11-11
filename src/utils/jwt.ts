import jsonwebtoken from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export default class Jwt {
  public jwt = jsonwebtoken;

  public generateToken(user: IUser) {
    const payload = { id: user.id, username: user.username }; 
    return this.jwt.sign(
      payload,
      process.env.JWT_SECRET as string,
      { algorithm: 'HS256', expiresIn: '1d' },
    );
  }
}