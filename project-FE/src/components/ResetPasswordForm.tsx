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
    //There will be r states: normal, pending, success, error
    const [updateProcess, setUpdateProcess] = useState<string>("normal");
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

    const renderButtonState = (state:string)=>{
        if(state === "normal"){
            return "Reset Password"
        }else if(state === "pending"){
            return(
                <div>
                    <p>Pending...</p>
                </div>
            )
        }else if(state === "success"){
            return(
                <div>
                    <p>Success!</p>
                </div>
            )
        }else if(state === "error"){
            return(
                <div>
                    <p>Failed to Reset!</p>
                </div>
            )
        }
    }

    const verification = async (token:string, userId:string)=>{
        const verifyData = {
            token:token,
            userId:userId
        }

        try {
            const response = await axios.post("http://localhost:3000/reset-password/verifyToken", verifyData);
            
            setVerifyToken(true);
            
        } catch (error) {
            // Use error.response if it's an HTTP error or log the error for more details
            alert(error.response?.data?.error || "An error occurred");
            navigate("/")
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

            setUpdateProcess("pending");
            const response = await axios.post("http://localhost:3000/reset-password/updatePassword", updateData);
                
            if(response.data.success){
                setUpdateProcess("success")
            }else{
                setUpdateProcess("error")
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
                        <a href="/credentials" className="text-white cursor-pointer">Back to login </a>
                    </div>
                    <button type="submit" disabled={ updateProcess == "normal" ? false : true} className={`rounded-full p-2  ${updateProcess === "normal" ? "bg-red-400" : "bg-slate-400"} font-bold text-white`}>
                        {renderButtonState(updateProcess)}
                    </button>
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