import { IUser } from "../entities";

export interface IUserRepository {
    getAll(): Promise<Array<IUser> | null>;
    updateUser(user: IUser): Promise<boolean>;
    getByEmail(email: string): Promise<IUser | null>;
    findByUsername(username: string): Promise<IUser | null>;
    removeByEmail (email: string):  Promise<boolean>;
    insertUser(username: string, email: string, password: string): Promise<IUser | null>;
}