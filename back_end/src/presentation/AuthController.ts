import { Controller, HttpPost } from "../../teddy/decorators";
import { IUser } from "../domain/entities";
import { LoginQuery } from "../business/auth/LoginQuery";
import { RegisterQuery } from "../business/auth/RegisterQuery";
import { Ok, NotFound } from "../../teddy/action-results";

@Controller('/auth')
export class AuthController {

    @HttpPost('/login')
    public async login(query: any, body: IUser) {
        const loginQuery = new LoginQuery(body);
        const token = await loginQuery.execute();
        if (token)
            return new Ok(JSON.stringify({'token': token}));
        else
            return new NotFound(JSON.stringify({'message': 'Could not login'}));
    }

    @HttpPost('/register')
    public async register(query: any, body: IUser) {
        const registerQuery = new RegisterQuery(body);
        const user = await registerQuery.execute();
        if (user)
            return new Ok(JSON.stringify({'token': user}));
        else
            return new NotFound(JSON.stringify({'message': 'Could not register'}));
    }
}