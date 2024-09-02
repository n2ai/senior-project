interface IRegisterFormProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

const RegisterForm:React.FC<IRegisterFormProps> = ({setState})=>{

    const onClickAlreadyHaveAccount = ()=>{
        setState("logIn")
    }

    return(
        <>
            <h1 className="text-3xl font-bold">Register</h1>

            <label className="flex flex-col">
                <span className="font-bold">Full Name</span>
                <input name="name" className="border rounded-lg p-2" placeholder="Enter your full name"></input>
            </label>

            <label className="flex flex-col">
                <span className="font-bold">Email</span>
                <input name="email" className="border rounded-lg p-2" placeholder="Enter your email"></input>
            </label>

            <label className="flex flex-col">
                <span className="font-bold">Password</span>
                <input type="password" name="password" className="border rounded-lg p-2" placeholder="Enter your password"></input>
            </label>

            <label className="flex flex-col">
                <span className="font-bold">Re-enter Password</span>
                <input type="password" name="reEnterPassword" className="border rounded-lg p-2" placeholder="Re-enter password"></input>
            </label>

            <div className="flex flex-col">
                <a onClick={onClickAlreadyHaveAccount} className="text-white cursor-pointer">Already have an account? </a>
            </div>

            <div className="flex flex-col">
                <button type="submit" className="border rounded-full p-2 bg-red-400 font-bold text-white">Log In</button>
            </div>
        </>
    )
}

export default RegisterForm;