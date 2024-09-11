import { verifyToken } from "../middleware/JWTActions.js";

export const handleAuthController = async (req,res)=>{
    //Data form request body
    const data = req.body;

    //Get _id from request
    const _id = req.params.id;

    //Get JWT Token
    const token = data.accessToken;

    const payload = verifyToken(token);

    if(_id !== payload._id){
        return res.status(500).json("Cannot Login")
    }

    res.status(200).json({message:"Correct Token"})
};