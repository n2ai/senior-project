interface ILoginFormProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

const LoginForm:React.FC<ILoginFormProps> = ({setState})=>{

    const onClickDoNotHaveAccount = ()=>{
        setState("register");
    }

    return(
        <>
            <h1 className="text-3xl font-bold">Log In</h1>

                <label className="flex flex-col">
                    <span className="font-bold">Email</span>
                    <input name="email" className="border rounded-lg p-2" placeholder="Enter your email"></input>
                </label>

                <label className="flex flex-col">
                    <span className="font-bold">Password</span>
                    <input type="password" name="password" className="border rounded-lg p-2" placeholder="Enter your password"></input>
                </label>

                <div className="flex flex-col">
                    <a onClick={onClickDoNotHaveAccount} className="text-white cursor-pointer">Do not have an account?</a>
                    <a href="/" className="text-white">Forgot Password?</a>

                </div>

                <div className="flex flex-col">
                    <button type="submit" className="border rounded-full p-2 bg-red-400 font-bold text-white">Log In</button>
                </div>
        </>
    )
}

export default LoginForm;