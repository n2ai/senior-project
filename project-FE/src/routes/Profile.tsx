import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../components/ProfileHeader";
import ProfileLevels from "../components/ProfileLevels";
import axios from "axios";
import ProfileRoadMap from "../components/ProfileRoadMap";
import ProfileTrophies from "../components/ProfileTrophies";
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

    // const fetchUserData = async ()=>{
    //     try{
    //         await axios.get(`http://localhost:3000`)
    //     }
    // }

    useEffect(()=>{
        fetchJWTVerify()
    })

    useEffect(()=>{

    })

    return (
        verification &&
        <div className="bg-black w-full">
            <div className="container">
                <ProfileHeader fullName="Hai" levels={3}></ProfileHeader>
                <ProfileLevels></ProfileLevels>
                <ProfileRoadMap></ProfileRoadMap>
                <ProfileTrophies></ProfileTrophies>
            </div>
        </div>
        
    )
}

export default Profile;