import { IUserRepository } from "../../domain/repositories"
import UserRepository from "../../domain/repositories/UserRepository"
import { IUser } from "../../domain/entities";
//import { hashSync } from "bcrypt";
import * as crypto from "crypto";

const secret = 'secret discret:)';

export class RegisterQuery {
    private userRepository: IUserRepository;
    private body: IUser;
    constructor(body: IUser) {
        this.userRepository = new UserRepository();
        this.body = body;
    }
    public async execute() {
        let jwt = require('jsonwebtoken');
        const username = this.body.username;
        const password = this.body.password;
        const hmac = crypto.createHmac('sha256', secret);
        hmac.update(password);
        const email = this.body.email;

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