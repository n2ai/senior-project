import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useCookies } from "react-cookie";
import TutorialLevel from "../components/profile/tutorial/TutorialLevel";
import axios from "axios";


const ProfileCity = ()=>{
    const {id, cityId} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [quizContents, setQuizContents] = useState<boolean>([]);
    const [userQuizContents, setQuizContents] = useState<boolean>([]);
    const navigate = useNavigate();

    const accessToken = cookies.accessToken;

    //Check for the accesstoken
    const fetchJWTVerify = async ()=>{
        try{
            await axios.post(`http://localhost:3000/profile/${id}`,{accessToken:accessToken});
        }catch(error){
            console.log(error);
            navigate("/");
        }        
    }

    const fetchUserCityData = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/userCity/${id}/${cityId}`);
            const responseData = await response.data;

        }catch(error){
            console.log(error);
        }
    }

    const renderCity = ()=>{
        if (cityId === "TTR") {
            return <TutorialLevel />;
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchJWTVerify();
                await fetchUserCityData();
                setIsVerified(true);
            } catch (error) {
                console.log(error);
            }
        };
    
        if (!isVerified) {
            fetchData();
        }
    }, [isVerified]);

    return(
        isVerified ? (
            <div>
                {renderCity()}
            </div>
        ):(
            <div>
                ...Loading
            </div>
        )
        
    )
}
export default ProfileCity;