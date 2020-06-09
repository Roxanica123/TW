import { IUserRepository } from "../../domain/repositories/IUserRepository"
import { IUser } from "../../domain/entities";
import { UserRepository } from "../../domain/repositories/UserRepository";

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
        const password = this.body.password;
        const user = await this.userRepository.findByUsername(username)
        if(user)
        {
            if(password === user.password) // combinatie buna
            {
                let passwordToken = jwt.sign({username:user.username,email:user.email}, secret);
                return passwordToken;
            }
            else // username bun parola proasta
            {
                return null;
            }
            
        }
        else{ // nu exista userul
            return null;
        }
    }
}