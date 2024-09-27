import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useCookies } from "react-cookie";
import axios from "axios";
const ProfileCity = ()=>{
    const {id} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const navigate = useNavigate();

    const accessToken = cookies.accessToken;

    //Check for the accesstoken
    const fetchJWTVerify = async ()=>{
        try{
            await axios.post(`http://localhost:3000/profile/${id}`,{accessToken:accessToken})
        }catch(error){
            console.log(error);
            navigate("/");
        }        
    }

    useEffect(()=>{
        const fetchData = async ()=>{
            await fetchJWTVerify()
            setIsVerified(true)
        }

        fetchData()
    })

    return(
        isVerified ? (
            <div>
                <Outlet/>
            </div>
        ):(
            <div>
                ...Loading
            </div>
        )
        
    )
}
export default ProfileCity;