type errorValidation = {
    fullName?:string,
    email?:string,
    password?:string,
    reEnterPassword?:string
}

type validateValues = errorValidation;


interface IForgotPasswordProps{
    setState: React.Dispatch<React.SetStateAction<string>>
}

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


const ForgotPasswordForm:React.FC<IForgotPasswordProps> = ({setState})=>{
    return(
        <div>

        </div>
    )
}

export default ForgotPasswordForm;