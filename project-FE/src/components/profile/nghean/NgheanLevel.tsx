import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import QuizContents from "../QuizContents";
import backgroundImg from "../../../images/paperBg.jpg";
import StageArray from "../StageArray";
import NgheanCuisine from "./NgheanCuisine";
import NgheanCulture from "./NgheanCulture";
import NgheanPeople from "./NgheanPeople";
import cuisineImg from "../../../images/ngheanStageImages/ngheanCuisine.jpg";
import cultureImg from "../../../images/ngheanStageImages/ngheanCulture.jpg";
import peopleImg from "../../../images/ngheanStageImages/ngheanPeople.jpg";
import quizImg from "../../../images/ngheanStageImages/ngheanQuiz.jpg";


interface INgheanLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const NgheanLevel:React.FC<INgheanLevel> = ({quizContents, userQuizContents})=>{

    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <NgheanCulture></NgheanCulture>
        }else if (currentStage === "people"){
            return <NgheanPeople></NgheanPeople>
        }else if(currentStage === "cuisine"){
            return <NgheanCuisine></NgheanCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [
        {
            name: "culture",
            img: cultureImg,
            title: "Chapter I",
            subtitle: "Historical Roots of Nghe An"
        },
        {
            name: "cuisine",
            img: cuisineImg,
            title: "Chapter II",
            subtitle: "Flavors of Nghe An"
        },
        {
            name: "people",
            img: peopleImg,
            title: "Chapter III",
            subtitle: "The Beauty of Nghe An"
        },
        {
            name: "quiz",
            img: quizImg,
            title: "Chapter IV",
            subtitle: "Discovering Nghe An"
        }
    ];
    
    

    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full ">
                <StageArray stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default NgheanLevel;