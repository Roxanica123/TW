import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { Connection } from "..";
import { IUser } from "../../domain/entities";

export class UserRepository implements IUserRepository {

    private readonly connection: Connection;

    constructor() {
        this.connection = new Connection();
    }

    async getAll(): Promise<Array<IUser> | null> {
        const query: string = `select * from users`;
        const user: IUser[] = await this.connection.execute(query);
        if (user.length === 0)
            return null;
        return user;
    }

    async updateUser(user: IUser): Promise<boolean> {

        try {
            const query: string = ` update users set username = '${user.username}', password = '${user.password} where email = '${user.email}' `;
            await this.connection.execute(query);
        }
        catch {
            return false;
        }
        return true;
    }

    async getByEmail(email: string): Promise<IUser | null> {
        const query: string = ` select username, password, email from users where email = '${email}' `;
        const user: IUser[] = await this.connection.execute(query);
        if (user.length === 0)
            return null;
        return user[0];
    } 

    async removeByEmail (email: string):  Promise<boolean>  {

        try {
            const query: string = ` delete from users where email = '${email}' `;
            await this.connection.execute(query);
        }
        catch {
            return false;
        }
        return true;
    }

    async findByUsername(username: string): Promise<IUser | null> {
        const query: string = ` select username, password, email from users where  username = '${username}' `;
        const user: IUser[] = await this.connection.execute(query);
        if (user.length === 0)
            return null;
        return user[0];
    }
    async insertUser(username: string, email: string, password: string): Promise<IUser | null> {
        const existentUser: IUser | null = await this.findByUsername(username);
        if (existentUser !== null)
            return null;
        const query: string = ` insert into users (username, email, password) values ('${username}', '${email}', '${password}')`;
        await this.connection.execute(query);
        const createdUser = await this.findByUsername(username);
        return createdUser;
    }

}