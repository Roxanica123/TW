import { Controller, HttpPost } from "../../teddy/decorators";
import { IUser } from "../domain/entities";
import { FindUserQuery, InsertUserCommand } from "../business/auth";
import { Ok, NotFound } from "../../teddy/action-results";

@Controller('/auth')
export class AuthController {

    @HttpPost('/login')
    public async login(_query: any, body: IUser) {
        const loginQuery = new FindUserQuery(body);
        const token = await loginQuery.execute();
        if (token)
            return new Ok(JSON.stringify({ 'token': token }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not login' }));
    }

    @HttpPost('/register')
    public async register(_query: any, body: IUser) {
        const registerQuery = new InsertUserCommand(body);
        const user = await registerQuery.execute();
        if (user)
            return new Ok(JSON.stringify({ 'token': user }));
        else
            return new NotFound(JSON.stringify({ 'message': 'Could not register' }));
    }
}