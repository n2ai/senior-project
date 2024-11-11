import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import HoianCuisine from "./HoianCuisine";
import HoianPeople from "./HoianPeople";
import HoianCulture from "./HoianCulture";
import QuizContents from "../QuizContents";
import backgroundImg from "/images/paperBg.jpg";
import cultureImg from "/images/hoianStageImages/hoianculture.jpg";
import peopleImg from "/images/hoianStageImages/hoianpeople.jpg";
import cuisineImg from "/images/hoianStageImages/hoiancuisine.jpg";
import quizImg from "/images/hoianStageImages/hoianquiz.jpg";
import StageArray from "../StageArray";

interface IHoianLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const HoianLevel:React.FC<IHoianLevel> = ({quizContents, userQuizContents})=>{

    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <HoianCulture></HoianCulture>
        }else if (currentStage === "people"){
            return <HoianPeople></HoianPeople>
        }else if(currentStage === "cuisine"){
            return <HoianCuisine></HoianCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [
        {
            name: "culture",
            img: cultureImg,
            title: "Chapter I",
            subtitle: "The Glow of Lanterns"
        },
        {
            name: "cuisine",
            img: cuisineImg,
            title: "Chapter II",
            subtitle: "The Bustling Market"
        },
        {
            name: "people",
            img: peopleImg,
            title: "Chapter III",
            subtitle: "Reflections on the Thu Bon River"
        },
        {
            name: "quiz",
            img: quizImg,
            title: "Chapter IV",
            subtitle: "A Journey Through Time"
        }
    ];
    


    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full text-slate-500">
                <StageArray stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default HoianLevel;