import video from "../videos/resetPasswordVideo.mp4"
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import LoadingScreen from "./LoadingScreen";
import { useNavigate } from "react-router-dom";
type errorValidation = {
    password?:string, 
    reEnterPassword?:string
}

type validateValues = errorValidation;

const validate = (values: validateValues) =>{
    const errors: errorValidation = {};
    if(!values.password){
        errors.password = "Required"
    }

    if(!values.reEnterPassword){
        errors.reEnterPassword = "Required";
    }else if(values.reEnterPassword !== values.password){
        errors.reEnterPassword = "Does not match the entered password"
    }

    return errors;
}

const ResetPasswordForm = ()=>{

    const [verifyToken, setVerifyToken] = useState<boolean>(false);
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const userIdFromUrl = urlParams.get("userId")


    useEffect(()=>{
        
        if (!tokenFromUrl || !userIdFromUrl){
            alert("There is no query token or user Id");
            navigate("/")
        }else{
            verification(tokenFromUrl, userIdFromUrl);
        }
        
    },[])

    const verification = async (token:string, userId:string)=>{
        const verifyData = {
            token:token,
            userId:userId
        }

        try {
            const response = await axios.post("http://localhost:3000/reset-password/verifyToken", verifyData);
            if (response.data.success) {
                setVerifyToken(true);
            } else {
                alert("Cannot Verify Token");
                console.log(response);
            }
        } catch (error) {
            // Use error.response if it's an HTTP error or log the error for more details
            alert(error.response?.data?.error || "An error occurred");
            console.error(error);
        }
    }


    const formik = useFormik({
        initialValues:{
            password:'',
            reEnterPassword:''
        },
        validate,
        onSubmit: async (values)=>{
            
            const updateData = {
                userId: userIdFromUrl,
                newPassword : values.password
            }


            try{
                const response = await axios.post("http://localhost:3000/reset-password/updatePassword", updateData);
                
                
            }catch(error){

                
                console.log(error)
            }
            
        }
    })

    return(
        verifyToken ? (
        <div  className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src={video} type="video/mp4" />
                Your Browser does not support the video tag
            </video>

            <div className="relative z-10 backdrop-blur-md items-center flex-col flex p-8 rounded-lg shadow-lg max-w-md w-full">
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-[80%] mt-5">
                    <h1 className="text-3xl font-bold">Update Password</h1>

                    <label className="flex flex-col">
                        <span className="font-bold">New Password</span>
                        <input onChange={formik.handleChange} value={formik.values.password} name="password" className="border rounded-lg p-2" placeholder="Enter your new password"></input>
                        {formik.errors.password ? <div className="text-red-400">{formik.errors.password}</div> : null}
                    </label>

                    <label className="flex flex-col">
                        <span className="font-bold">Re-enter Password</span>
                        <input onChange={formik.handleChange} value={formik.values.reEnterPassword} name="reEnterPassword" className="border rounded-lg p-2" placeholder="Re-enter your new password"></input>
                        {formik.errors.reEnterPassword ? <div className="text-red-400">{formik.errors.reEnterPassword}</div> : null}
                    </label>

                    <div className="flex flex-col">
                        <button type="submit" className="rounded-full p-2 bg-red-400 font-bold text-white">Update Password</button>
                    </div>
                </form>
            </div>
        </div>)
        : 
        (
            <LoadingScreen></LoadingScreen>
        )
    )
}

export default ResetPasswordForm;