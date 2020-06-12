import { IUserRepository } from "../../domain/repositories"
import { IUser } from "../../domain/entities";
import { UserRepository } from "../../persistence/repositories";
import * as crypto from "crypto"
import * as jwt from "jsonwebtoken";

const secret = 'secret discret:)';

export class InsertUserCommand {
    private userRepository: IUserRepository;
    private body: IUser;
    constructor(body: IUser) {
        this.userRepository = new UserRepository();
        this.body = body;
    }
    public async execute() {
        const username = this.body.username;
        const password = this.body.password;
        const email = this.body.email;

        const hmac = crypto.createHmac('sha256', secret);

        hmac.update(password);

        let user = await this.userRepository.insertUser(username, email, hmac.digest('hex'));
        if (user) {
            let passwordToken = jwt.sign({ username: user.username, email: user.email }, secret);
            return passwordToken;
        }
        else {
            return null;
        }

    }
}