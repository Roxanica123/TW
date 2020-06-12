import { Controller, HttpPost } from "../../teddy/decorators";
import { IUser } from "../domain/entities";
import { FindUserQuery, InsertUserCommand } from "../business/auth";
import { Ok, Unauthorized, Created, BadRequest } from "../../teddy/action-results";

@Controller('/auth')
export class AuthController {

    @HttpPost('/login')
    public async login(_query: any, body: IUser) {
        const loginQuery = new FindUserQuery(body);
        const token = await loginQuery.execute();
        if (token)
            return new Ok(JSON.stringify({ 'token': token }));
        else
            return new Unauthorized(JSON.stringify({ 'response': 'Could not login' }));
    }

    @HttpPost('/register')
    public async register(_query: any, body: IUser) {
        const registerQuery = new InsertUserCommand(body);
        const user = await registerQuery.execute();
        if (user)
            return new Created(JSON.stringify({ 'token': user }));
        else
            return new BadRequest(JSON.stringify({ 'message': 'Could not register' }));
    }
}