import * as jwt from "jsonwebtoken";
import { UserRepository } from "../../persistence/repositories";
import { IDecodedToken } from "./IDecodedToken";
import { IUser } from "../../domain/entities";

const secret = 'secret discret:)';

export async function authenticate(jwtToken: string): Promise<boolean> {
    let valid: boolean = false;
    try {
        const decoded: IDecodedToken = <IDecodedToken>jwt.verify(jwtToken, secret);
        const user: IUser | null = await new UserRepository().findByUsername(decoded.username);
        if (user !== null && user.email === decoded.email)
            valid = true;
    } catch (err) { }
    return valid;
}