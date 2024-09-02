import mountainUrl from "../videos/59291-492700392_small.mp4"
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { ReactNode, useState } from "react";

const Credentials = ()=>{

    const [credentialsState, setCredentialsState] = useState<string>("logIn");

    const displayForm = ()=>{
        if(credentialsState === "logIn"){
            return <LoginForm setState={setCredentialsState}/> ? <LoginForm setState={setCredentialsState}/>  : null
        }else if(credentialsState === "register"){
            return <RegisterForm setState={setCredentialsState} /> ? <RegisterForm setState={setCredentialsState} /> : null
        }
    }

    return(
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <video autoPlay loop muted className="absolute w-full h-full object-cover">
                <source src={mountainUrl} type="video/mp4" />
                Your Browser does not support the video tag
            </video>

            <div className="relative z-10 backdrop-blur-md items-center flex-col flex p-8 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex flex-col gap-3 w-[80%] mt-5">
                    {displayForm()}
                </div>
            </div>
        </div>
    )
}

export default Credentials;