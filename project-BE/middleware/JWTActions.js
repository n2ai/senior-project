import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const createJWT = (payload)=>{
    let key = process.env.JWT_SECRET;
    let token = null;
    try{
        token = jwt.sign(payload, key);
    }catch(err){
        console.log(err)
    }

    return token
}

export const verifyToken = (token)=>{
    let key = process.env.JWT_SECRET;
    let data = null;
    try{
        let decoded = jwt.verify(token, key);
        data = decoded;
    }catch(err){
        console.log(err)
    }

    return data
}
 