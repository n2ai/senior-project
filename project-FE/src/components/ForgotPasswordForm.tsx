import { useFormik } from "formik";
import axios from "axios";
import { useState } from "react";
type errorValidation = {
    email?:string,
}

type validateValues = errorValidation;


interface IForgotPasswordProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

const validate = (values:validateValues)=>{
    const errors:errorValidation = {};
    
    if(!values.email){
        errors.email = "Required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }

    return errors
}


const ForgotPasswordForm:React.FC<IForgotPasswordProps> = ({setState})=>{

    //
    const [resetState, setResetState] = useState<string>("normal")

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
                    <p>Sent!</p>
                </div>
            )
        }else if(state === "error"){
            return(
                <div>
                    <p>Failed to Request!</p>
                </div>
            )
        }
    }

    const formik = useFormik({
        initialValues:{
            email:'',
        },
        validate,
        onSubmit: async (values)=>{
            //Notice what kind of data is this
            const forgotPasswordForm = {
                email: values.email
            }

            const sendData = {
                type:"forgot",
                data:forgotPasswordForm
            }
            
            try{

                setResetState("pending")  
                const response = await axios.post("http://localhost:3000/credentials", sendData);

                if(response.status === 200){
                    setResetState("success")
                }else{
                    setResetState("error")
                }
                
            }catch(error){
                // setShow(true);
                // setModalContent("Invalid Credentials");
                console.log(error);
            };
        }
    })

    return(
        <>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-[80%] mt-5">
                <h1 className="text-3xl font-bold">Forgot Password</h1>
                <a onClick={()=>setState("logIn")} className="text-black">Enter your email to reset your password</a>

                <label className="flex flex-col">
                    <span className="font-bold">Email</span>
                    <input onChange={formik.handleChange} value={formik.values.email} name="email" className="border rounded-lg p-2" placeholder="Enter your password"></input>
                    {formik.errors.email ? <div className="text-red-400">{formik.errors.email}</div> : null}
                </label>

                <div className="flex flex-col">
                    <button type="submit" disabled={ resetState == "normal" ? false : true} className={`rounded-full p-2  ${resetState === "normal" ? "bg-red-400" : "bg-slate-400"} font-bold text-white`}>
                        {renderButtonState(resetState)}
                    </button>
                </div>

                <div className="flex flex-col">
                    <a onClick={()=>setState("logIn")} className="text-white cursor-pointer">Back to login </a>
                </div>
            </form>
        </>
    )
}

export default ForgotPasswordForm;