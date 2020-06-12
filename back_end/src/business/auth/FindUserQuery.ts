import { IUserRepository } from "../../domain/repositories"
import { IUser } from "../../domain/entities";
import { UserRepository } from "../../persistence/repositories";
import * as jwt from "jsonwebtoken";

const secret = 'secret discret:)';

export class FindUserQuery {
    private userRepository: IUserRepository;
    private body: IUser;
    constructor(body: IUser) {
        this.userRepository = new UserRepository();
        this.body = body;
    }
    public async execute() {
        const username = this.body.username;
        const password = this.body.password;
        const user = await this.userRepository.findByUsername(username)
        if (user) {
            if (password === user.password) {
                let passwordToken = jwt.sign({ username: user.username, email: user.email }, secret);
                return passwordToken;
            }
            else {
                return null;
            }

        }
        else {
            return null;
        }
    }
}