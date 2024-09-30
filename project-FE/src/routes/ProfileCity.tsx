import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useCookies } from "react-cookie";
import TutorialLevel from "../components/profile/tutorial/TutorialLevel";
import axios from "axios";

export type quizContents = {
    _id:string,
    cityId:string,
    options:string[],
    question:string,
    questionName:string,
    correctAnswer:string
}

export type userQuizContents = {
    cityId:string,
    currentProgress:number,
    currentQuestion:number,
    userAnswers: {questionName:string, questionAnswer:string}[],
    //_id is the userId
    _id:string
}

const ProfileCity = ()=>{
    const {id, cityId} = useParams();
    const [cookies, setCookies] = useCookies(['accessToken']);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [quizContents, setQuizContents] = useState<quizContents[]>([]);
    const [userQuizContents, setUserQuizContents] = useState<userQuizContents>([]);
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
            setQuizContents(responseData.quizContents);
            setUserQuizContents(responseData.userQuizContents);

        }catch(error){
            console.log(error);
        }
    }

    const renderCity = ()=>{
        if (cityId === "TTR") {
            return <TutorialLevel userQuizContents={userQuizContents} quizContents={quizContents} />;
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