import { IUserRepository } from "../../domain/repositories"
import { IUser } from "../../domain/entities";
import { UserRepository } from "../../persistence/repositories";
import * as jwt from "jsonwebtoken";
import * as crypto from "crypto"

const secret = 'secret discret:)';

export class LoginQuery {
    private userRepository: IUserRepository;
    private body: IUser;
    constructor(body: IUser) {
        this.userRepository = new UserRepository();
        this.body = body;
    }
    public async execute() {
        const username = this.body.username;
        const password = this.body.password;
        const hmac = crypto.createHmac('sha256', secret);
        hmac.update(password);
        const user = await this.userRepository.findByUsername(username)
        if (user) {
            if (hmac.digest('hex') === user.password) // combinatie buna
            {
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