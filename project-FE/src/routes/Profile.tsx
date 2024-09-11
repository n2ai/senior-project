import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
const Profile = ()=>{

    const [JWTVerify, setJWTVerify] = useState<boolean>(false);
    const {id} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [verification, setVerification] = useState<boolean>(false);

    const accessToken = cookies.accessToken;

    const fetchJWTVerify = async ()=>{
        try{
            await axios.post(`http://localhost:3000/profile/${id}`,{accessToken:accessToken})
            setVerification(true);
        }catch(error){
            setVerification(false);
            console.log(error);
        }        
    }

    useEffect(()=>{
        fetchJWTVerify()
    })

    return (
        verification &&
        
        <div>
            This is profile
        </div>
    )
}

export default Profile;