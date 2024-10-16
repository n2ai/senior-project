import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import HochiminhCuisine from "./HochiminhCuisine";
import HochiminhCulture from "./HochiminhCulture";
import HochiminhPeople from "./HochiminhPeople";
import QuizContents from "../QuizContents";
import backgroundImg from "../../../images/paperBg.jpg";
import StageArray from "../StageArray";
import cultureImg from "../../../images/hochiminhStageImages/hochiminhCulture.jpg";
import cuisineImg from "../../../images/hochiminhStageImages/hochiminhCuisine.jpg";
import peopleImg from "../../../images/hochiminhStageImages/hochiminhPeople.jpg";
import quizImg from "../../../images/hochiminhStageImages/hochiminhQuiz.jpg"

interface IHochiminhLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const HochiminhLevel:React.FC<IHochiminhLevel> = ({quizContents, userQuizContents})=>{

    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <HochiminhCulture></HochiminhCulture>
        }else if (currentStage === "people"){
            return <HochiminhPeople></HochiminhPeople>
        }else if(currentStage === "cuisine"){
            return <HochiminhCuisine></HochiminhCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [
        {
            name: "culture",
            img: cultureImg,
            title: "Chapter I",
            subtitle: "Echoes of Saigon"
        },
        {
            name: "cuisine",
            img: cuisineImg,
            title: "Chapter II",
            subtitle: "A Culinary Adventure"
        },
        {
            name: "people",
            img: peopleImg,
            title: "Chapter III",
            subtitle: "The Hustle and Bustle"
        },
        {
            name: "quiz",
            img: quizImg,
            title: "Chapter IV",
            subtitle: "The Final Challenge"
        }
    ];
    


    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full">
                <StageArray stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default HochiminhLevel;