import { ResultSetHeader } from 'mysql2';
import { INewUser } from '../interfaces/INewUser';
import { IUser } from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  public registerNewUser = async (newUser: INewUser): Promise<IUser> => {
    const { username, classe, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, ...newUser };
  };
}