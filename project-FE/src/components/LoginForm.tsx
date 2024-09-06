import { useFormik } from "formik"

interface ILoginFormProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

type errorValidation = {
    email?:string,
    password?:string,
}

type validateValues = errorValidation;

const validate = (values:validateValues)=>{
    const errors:errorValidation = {}

    if(!values.email){
        errors.email = "Required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = "Required";
    }

    return errors;
}

const LoginForm:React.FC<ILoginFormProps> = ({setState})=>{

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:(values)=>{
            alert(JSON.stringify(values, null,2))
        }
    })

    const onClickDoNotHaveAccount = ()=>{
        setState("register");
    }


    return(
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-[80%] mt-5">
            <h1 className="text-3xl font-bold">Log In</h1>

                <label className="flex flex-col">
                    <span className="font-bold">Email</span>
                    <input onChange={formik.handleChange} value={formik.values.email} name="email" className="border rounded-lg p-2" placeholder="Enter your email"></input>
                    {formik.errors.email ? <div className="text-red-400">{formik.errors.email}</div> : null}
                </label>

                <label className="flex flex-col">
                    <span className="font-bold">Password</span>
                    <input onChange={formik.handleChange} value={formik.values.password} type="password" name="password" className="border rounded-lg p-2" placeholder="Enter your password"></input>
                    {formik.errors.password ? <div className="text-red-400">{formik.errors.password}</div> : null}
                </label>

                <div className="flex flex-col">
                    <a onClick={onClickDoNotHaveAccount} className="text-white cursor-pointer">Do not have an account?</a>
                    <a href="/" className="text-white">Forgot Password?</a>

                </div>

                <div className="flex flex-col">
                    <button type="submit" className="border rounded-full p-2 bg-red-400 font-bold text-white">Log In</button>
                </div>
        </form>
    )
}

export default LoginForm;