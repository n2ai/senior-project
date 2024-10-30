import mountainUrl from "../videos/59291-492700392_small.mp4"
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import {useState } from "react";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

const Credentials = ()=>{

    const [credentialsState, setCredentialsState] = useState<string>("logIn");
    
    const displayForm = ()=>{
        if(credentialsState === "logIn"){
            return <LoginForm setState={setCredentialsState}/> 
        }else if(credentialsState === "register"){
            return <RegisterForm setState={setCredentialsState} />
        }else if(credentialsState === "forgot"){
            return <ForgotPasswordForm setState={setCredentialsState} />
        }
    }

    return(
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src={mountainUrl} type="video/mp4" />
                Your Browser does not support the video tag
            </video>

            <div className="relative z-10 backdrop-blur-md items-center flex-col flex p-8 rounded-lg shadow-lg max-w-md w-full">
                {displayForm()}
            </div>
        </div>
    )
}

export default Credentials;