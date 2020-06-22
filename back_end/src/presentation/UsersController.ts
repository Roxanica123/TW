import { Controller, HttpPost, HttpGet, HttpDelete, HttpPut } from "../../teddy/decorators";
import { IUser } from "../domain/entities";
import UserRepository from "../domain/repositories/UserRepository"
import { Ok, NotFound } from "../../teddy/action-results";

@Controller('/users')
export class UsersController {

    @HttpGet('/')
    public async getAll(_query: any) {
        let repository = new UserRepository
        const users = await repository.getAll()

        if (users)
            return new Ok(JSON.stringify({ 'users': users }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not get users' }));
    }

    @HttpPost('/')
    public async post(_query: any, body: IUser) {
       
        let repository = new UserRepository
        const email = body.email
        const password = body.password
        const username = body.username

        const user = await repository.insertUser(username, email, password);

        if (user)
            return new Ok(JSON.stringify({ 'massage': 'New user inserted' }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not register' }));
    }

    
    @HttpPut('/')
    public async put(_query: any, body: IUser) {

        let repository = new UserRepository
        const user = await repository.updateUser(body)

        if (user)
            return new Ok(JSON.stringify({ 'message': 'User updated' }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not update the user' }));
    }

    
    @HttpDelete('/')
    public async delete(_query: any, body: IUser) {
       
        let repository = new UserRepository
        const email = body.email;
        const user = await repository.removeByEmail(email)

        if (user)
            return new Ok(JSON.stringify({ 'message': 'User deleted' }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not delete user' }));
    }
}