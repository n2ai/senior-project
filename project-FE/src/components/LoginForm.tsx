import { useFormik } from "formik";
import axios from "axios";
import {Modal } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

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

    const [show, setShow] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<string>("");
    const [cookies, setCookies] = useCookies(['accessToken']);
    const navigate = useNavigate();
    const handleClose = ()=>{
        setShow(false);
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate,
        onSubmit:async (values)=>{
            //Notice what kind of data is this
            
            const loginForm = {
                email: values.email,
                password: values.password
            };

            const sendData = {
                type:"login",
                data:loginForm
            };

            try{
                const response = await axios.post("http://localhost:3000/credentials", sendData);

                if(response.status === 200){
                    const accessToken = response.data.data.accessToken;
                    const userId = response.data.data._id;
                    setCookies('accessToken', accessToken, {path:'/'});
                    navigate(`/profile/${userId}`);
                }
                
            }catch(error){
                setShow(true);
                setModalContent("Invalid Credentials");
                console.log(error);
            };
            
        }
    })

    const onClickDoNotHaveAccount = ()=>{
        setState("register");
    };
    
    const onClickForgotPassword = ()=>{
        setState("forgot");
    };

    return(
        <>  
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
                    <a onClick={onClickForgotPassword} className="text-white cursor-pointer">Forgot Password?</a>

                </div>

                <div className="flex flex-col">
                    <button type="submit" className="rounded-full p-2 bg-red-400 font-bold text-white">Log In</button>
                </div>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="text-center">{modalContent}</Modal.Body>
            </Modal>
        </>
    )
}

export default LoginForm;