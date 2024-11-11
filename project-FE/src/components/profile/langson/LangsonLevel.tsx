import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import QuizContents from "../QuizContents";
import backgroundImg from "/images/paperBg.jpg";
import StageArray from "../StageArray";
import LangsonCulture from "./LangsonCulture";
import LangsonCuisine from "./LangsonCuisine";
import LangsonPeople from "./LangsonPeople";
import cuisineImg from "/images/langsonStageImages/langsonCuisine.jpg";
import cultureImg from "/images/langsonStageImages/langsonCulture.jpg";
import peopleImg from "/images/langsonStageImages/langsonPeople.jpg";
import quizImg from "/images/langsonStageImages/langsonQuiz.jpg";

interface ILangsonLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const LangsonLevel:React.FC<ILangsonLevel> = ({quizContents, userQuizContents})=>{

    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <LangsonCulture></LangsonCulture>
        }else if (currentStage === "people"){
            return <LangsonPeople></LangsonPeople>
        }else if(currentStage === "cuisine"){
            return <LangsonCuisine></LangsonCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [
        {
            name: "culture",
            img: cultureImg,
            title: "Chapter I",
            subtitle: "Traditions of Lang Son"
        },
        {
            name: "cuisine",
            img: cuisineImg,
            title: "Chapter II",
            subtitle: "Tastes of Lang Son"
        },
        {
            name: "people",
            img: peopleImg,
            title: "Chapter III",
            subtitle: "The Heart of Lang Son"
        },
        {
            name: "quiz",
            img: quizImg,
            title: "Chapter IV",
            subtitle: "Exploring Lang Son"
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

export default LangsonLevel;