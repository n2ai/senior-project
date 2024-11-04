import {ResetPasswordStorage} from "../models/resetPasswordStorage.js";
import bcrypt from "bcryptjs";
import {Users} from "../models/users.js";


export const handleVerifyToken = async (req, res)=>{
    const token = req.body.token;
    const userId = req.body.userId;
    try{

        //1. Find Storage
        const exisitingStorage = await ResetPasswordStorage.findById({_id:userId})
        if(!exisitingStorage) return res.status(404).json({error:"User not found", success:false});

        const hashedResetToken = exisitingStorage.passwordResetToken;
        const resetExpires = exisitingStorage.passwordResetExpires;

        if(hashedResetToken == undefined || resetExpires == undefined){
            return res.status(400).json({error:"Invalid or Expired Token", success:false});
        }

        //2. Verify Token 
        const isTokenValid = bcrypt.compare(token, hashedResetToken);
        if(!isTokenValid) return res.status(400).json({error:"Invalid or Expired Token", success:false});

        //3. Check expire time
        if(Date.now() > new Date(resetExpires).getTime()){
            return res.status(400).json({error:"Token Expired", success:false})
        }


    }catch(error){
        res.status(400).json({error:error,success:false})
    }

    return res.status(200).json({message:"Successful Verification", success:true})
}

export const handleUpdatePassword = async (req, res)=>{
    const userId = req.body.userId;
    const newPassword = req.body.newPassword;

    const user = await Users.findById(userId);
    const resetStorage = await ResetPasswordStorage.findById(userId);
    if(user){
        const salt = await bcrypt.genSalt(10);
        const hashedNewPassword = await bcrypt.hash(newPassword, salt);

        user.password = hashedNewPassword;
        await user.save()

        if(resetStorage){
            resetStorage.passwordResetExpires = undefined;
            resetStorage.passwordResetToken = undefined;
            await resetStorage.save()
        }

        res.status(200).json({message:"Successfully Updated", success:true});
    }else{
        res.status(400).json({error:"Error Occured, Cannot Update", success:false})
    }
    
}

 