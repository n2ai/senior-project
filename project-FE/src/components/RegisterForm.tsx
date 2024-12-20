import { useFormik } from "formik"
import axios from "axios";
import Modal from  "react-bootstrap/Modal";
import { useState } from "react";

interface IRegisterFormProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

type errorValidation = {
    fullName?:string,
    email?:string,
    password?:string,
    reEnterPassword?:string
}

type validateValues = errorValidation;

const validate = (values:validateValues)=>{
    const errors:errorValidation = {};
    if(!values.fullName){
        errors.fullName = 'Required';
    }

    if(!values.email){
        errors.email = "Required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address'
    }

    if(!values.password){
        errors.password = "Required";
    }

    if(!values.reEnterPassword){
        errors.reEnterPassword = "Required";
    }else if(values.reEnterPassword !== values.password){
        errors.reEnterPassword = "Does not match the entered password"
    }

    return errors
}

const RegisterForm:React.FC<IRegisterFormProps> = ({setState})=>{

    const [show, setShow] = useState<boolean>(false);

    const [modalContent, setModalContent] = useState<string>("");

    const handleClose = ()=>{
        setShow(false);
    }



    const formik = useFormik({
        initialValues:{
            fullName:'',
            email:'',
            password:'',
            reEnterPassword:''
        },
        validate,
        onSubmit: async (values)=>{
            //Notice what kind of data is this
            
            const registerForm = {
                fullName: values.fullName,
                email: values.email,
                password: values.password
            }

            const sendData = {
                type:"register",
                data:registerForm
            }

            try{
                await axios.post("http://localhost:3000/credentials", sendData);

                // const message = responseData.message;

                setModalContent("Account is created!");

                setShow(true);
            }catch(error){

                setModalContent("Account is already exists!")
                
                setShow(true);
                console.log(error)
            }
            
        }
    })

    const onClickAlreadyHaveAccount = ()=>{
        setState("logIn")
    }

    return(
        <>
            <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3 w-[80%] mt-5">
                <h1 className="text-3xl font-bold">Register</h1>

                <label className="flex flex-col">
                    <span className="font-bold">Full Name</span>
                    <input onChange={formik.handleChange} value={formik.values.fullName} name="fullName" className="border rounded-lg p-2" placeholder="Enter your full name"></input>
                    {formik.errors.fullName ? <div className="text-red-400">{formik.errors.fullName}</div> : null}
                </label>

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

                <label className="flex flex-col">
                    <span className="font-bold">Re-enter Password</span>
                    <input onChange={formik.handleChange} value={formik.values.reEnterPassword} type="password" name="reEnterPassword" className="border rounded-lg p-2" placeholder="Re-enter password"></input>
                    {formik.errors.reEnterPassword ? <div className="text-red-400">{formik.errors.reEnterPassword}</div> : null}
                </label>

                <div className="flex flex-col">
                    <a onClick={onClickAlreadyHaveAccount} className="text-white cursor-pointer">Already have an account? </a>
                </div>

                <div className="flex flex-col">
                    <button type="submit" className="rounded-full p-2 bg-red-400 font-bold text-white">Register</button>
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

export default RegisterForm;