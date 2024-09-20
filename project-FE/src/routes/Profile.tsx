import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProfileRegions from "../components/profile/ProfileRegions";
import ProfileNorthern from "../components/profile/ProfileNorthern"
import ProfileCentral from "../components/profile/ProfileCentral";
import ProfileSouthern from "../components/profile/ProfileSouthern";
const Profile = ()=>{

    const {id} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [verification, setVerification] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<string>("regions")

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

    const pageFlowRendering = ()=>{
        if(currentPage === "regions"){
            return <ProfileRegions setCurrentPage={setCurrentPage}></ProfileRegions>
        }else if(currentPage === "northern"){
            return <ProfileNorthern setCurrentPage={setCurrentPage}></ProfileNorthern>
        }else if(currentPage === "central"){
            return <ProfileCentral setCurrentPage={setCurrentPage}></ProfileCentral>
        }else if(currentPage === "southern"){
            return <ProfileSouthern setCurrentPage={setCurrentPage}></ProfileSouthern>
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
        <div className= "w-full bg-[#FADADD]">
            
            <div className="pt-4 container-sm mx-auto  w-full h-screen" >
                {pageFlowRendering()}
            </div>

        </div>
        
    )
}

export default Profile;