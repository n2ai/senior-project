import { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom"
import { useCookies } from "react-cookie";
import TutorialLevel from "../components/profile/tutorial/TutorialLevel";
import axios from "axios";
import HanoiLevel from "../components/profile/hanoi/HanoiLevel";
import DanangLevel from "../components/profile/danang/DanangLevel";
import HochiminhLevel from "../components/profile/hochiminh/HochiminhLevel";
import HaiphongLevel from "../components/profile/haiphong/HaiphongLevel";
import HoianLevel from "../components/profile/hoian/HoianLevel";
import PhuquocLevel from "../components/profile/phuquoc/PhuquocLevel";
import LangsonLevel from "../components/profile/langson/LangsonLevel";
import NgheanLevel from "../components/profile/nghean/NgheanLevel";
import BentreLevel from "../components/profile/bentre/BentreLevel";
import LoadingScreen from "../components/LoadingScreen";
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
    userId:string
}

const ProfileCity = ()=>{
    const {id, cityId} = useParams();
    const [cookies,] = useCookies(['accessToken']);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [quizContents, setQuizContents] = useState<quizContents[]>([]);
    const [userQuizContents, setUserQuizContents] = useState<userQuizContents>({
        cityId: "danang",
        currentProgress: 50, // 50% completed
        currentQuestion: 5, // Question 5 out of 10
        userAnswers: [
          { questionName: "What's the capital of Vietnam?", questionAnswer: "Hanoi" },
          { questionName: "Which river flows through Ho Chi Minh City?", questionAnswer: "Saigon River" }
        ],
        userId: "user12345"
    });
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
            const quizContents = responseData.quizContents;
            setQuizContents(quizContents);

            setUserQuizContents(responseData.userQuizContents);

        }catch(error){
            console.log(error);
        }
    }

    const renderCity = ()=>{
        if (cityId === "TTR") {
            return <TutorialLevel userQuizContents={userQuizContents} quizContents={quizContents} />;
        }else if (cityId === "HN"){
            return <HanoiLevel userQuizContents={userQuizContents} quizContents={quizContents} ></HanoiLevel>
        }else if(cityId === "DN"){
            return <DanangLevel userQuizContents={userQuizContents} quizContents={quizContents} ></DanangLevel>
        }else if(cityId === "HCM"){
            return <HochiminhLevel userQuizContents={userQuizContents} quizContents={quizContents}></HochiminhLevel>
        }else if(cityId === "HP"){
            return <HaiphongLevel userQuizContents={userQuizContents} quizContents={quizContents}></HaiphongLevel>
        }else if(cityId === "HA"){
            return <HoianLevel userQuizContents={userQuizContents} quizContents={quizContents}></HoianLevel>
        }else if(cityId === "PQ"){
            return <PhuquocLevel userQuizContents={userQuizContents} quizContents={quizContents} ></PhuquocLevel>
        }else if(cityId === "LS"){
            return <LangsonLevel userQuizContents={userQuizContents} quizContents={quizContents}></LangsonLevel>
        }else if(cityId === "NA"){
            return <NgheanLevel userQuizContents={userQuizContents} quizContents={quizContents}></NgheanLevel>
        }else if(cityId === "BT"){
            return <BentreLevel userQuizContents={userQuizContents} quizContents={quizContents}></BentreLevel>
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
            
            <LoadingScreen></LoadingScreen>
        )
        
    )
}
export default ProfileCity;