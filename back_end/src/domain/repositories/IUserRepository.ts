import { IUser } from "../entities";

export interface IUserRepository {
    findByUsername(username: string): Promise<IUser | null>;
    insertUser(username: string, email: string, password: string): Promise<IUser | null>
}