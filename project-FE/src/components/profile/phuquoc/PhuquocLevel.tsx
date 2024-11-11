import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import QuizContents from "../QuizContents";
import backgroundImg from "/images/paperBg.jpg";
import PhuquocCulture from "./PhuquocCulture";
import PhuquocPeople from "./PhuquocPeople";
import PhuquocCuisine from "./PhuquocCuisine";
import StageArray from "../StageArray";
import cultureImg from "/images/phuquocStageImages/phuquocStage1.jpg";
import cuisineImg from "/images/phuquocStageImages/phuquocStage2.jpg";
import peopleImg from "/images/phuquocStageImages/phuquocStage3.jpg";
import quizImg from "/images/phuquocStageImages/phuquocStage4.jpg";

interface IPhuquocLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const PhuquocLevel:React.FC<IPhuquocLevel> = ({quizContents, userQuizContents})=>{

    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <PhuquocCulture></PhuquocCulture>
        }else if (currentStage === "people"){
            return <PhuquocPeople></PhuquocPeople>
        }else if(currentStage === "cuisine"){
            return <PhuquocCuisine></PhuquocCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [
        {
            name: "culture",
            img: cultureImg,
            title: "Chapter I",
            subtitle: "The Island’s Heritage"
        },
        {
            name: "cuisine",
            img: cuisineImg,
            title: "Chapter II",
            subtitle: "Flavors of Phu Quoc"
        },
        {
            name: "people",
            img: peopleImg,
            title: "Chapter III",
            subtitle: "The Spirit of the Island"
        },
        {
            name: "quiz",
            img: quizImg,
            title: "Chapter IV",
            subtitle: "Discovering Phu Quoc"
        }
    ];
    

    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full text-white">
                <StageArray stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default PhuquocLevel;