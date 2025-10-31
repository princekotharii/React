import jwt from "jsonwebtoken"
import { user } from "../models/userModel"
export async function authMiddleware(req ,res ,next) {
    
try {
    const Token= req?.cookies?.accessToken
    res.status(401)
    const {Email,_id}=jwt.verify(accessToken,Process.env.JWT_SECRETS)
    
    
} catch (error) {
    console.log(error);
    
}

}
         
