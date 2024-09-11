import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import ProfileBody from "../components/ProfileBody";
import axios from "axios";
const Profile = ()=>{

    const {id} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [verification, setVerification] = useState<boolean>(false);

    const accessToken = cookies.accessToken;
    const navigate = useNavigate()

    const fetchJWTVerify = async ()=>{
        try{
            await axios.post(`http://localhost:3000/profile/${id}`,{accessToken:accessToken})
            setVerification(true);
        }catch(error){
            console.log(error);
            navigate("/");
        }        
    }

    useEffect(()=>{
        fetchJWTVerify()
    })

    useEffect(()=>{

    })

    return (
        verification &&
        <div className="container">
            <ProfileHeader fullName="Hai" levels={3}></ProfileHeader>
            <ProfileBody></ProfileBody>
        </div>
    )
}

export default Profile;