import { IUserRepository} from "../../domain/repositories"
import UserRepository from "../../domain/repositories/UserRepository"
import { IUser } from "../../domain/entities";
import { hashSync } from "bcrypt"

const secret = 'secret discret:)';

export class LoginQuery {
    private userRepository: IUserRepository;
    private body: IUser;
    constructor(body: IUser) {
        this.userRepository = new UserRepository();
        this.body = body;
    }
    public async execute() {
        let jwt = require('jsonwebtoken');
        const username = this.body.username;
        const password = hashSync(this.body.password, 5);
        const user = await this.userRepository.findByUsername(username)
        if (user) {
            if (password === user.password) // combinatie buna
            {
                let passwordToken = jwt.sign({ username: user.username, email: user.email }, secret);
                return passwordToken;
            }
            else // username bun parola proasta
            {
                return null;
            }

        }
        else { // nu exista userul
            return null;
        }
    }
}