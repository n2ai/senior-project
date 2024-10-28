import QuizContents from "../QuizContents";
import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import cultureImg from "../../../images/bentreStageImages/bentreCulture.jpg";
import cuisineImg from "../../../images/bentreStageImages/bentreCuisine.jpg";
import peopleImg from "../../../images/bentreStageImages/bentrePeople.jpg";
import quizImg from "../../../images/bentreStageImages/bentreQuiz.jpg";
import StageArray from "../StageArray";
import backgroundImg from "../../../images/paperBg.jpg";
import BentreCulture from "./BentreCulture";
import BentrePeople from "./BentrePeople";
import BentreCuisine from "./BentreCuisine";


interface IBentreLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const BentreLevel:React.FC<IBentreLevel> = ({quizContents, userQuizContents})=>{
    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stages = [{
        name: "culture",
        img: cultureImg,
        title: "Chapter I",
        subtitle: "Ben Tre’s Coconut Heritage",
    },{
        name: "cuisine",
        img: cuisineImg,
        title: "Chapter II",
        subtitle: "Tastes of the Mekong Delta",
    },{
        name: "people",
        img: peopleImg,
        title: "Chapter III",
        subtitle: "Rivers and Coconut Groves",
    },{
        name: "quiz",
        img: quizImg,
        title: "Chapter IV",
        subtitle: "Explore the Charm of Ben Tre",
    }
];


    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <BentreCulture></BentreCulture>
        }else if (currentStage === "people"){
            return <BentrePeople></BentrePeople>
        }else if(currentStage === "cuisine"){
            return <BentreCuisine></BentreCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full">
                <StageArray className="text-white" stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )

}

export default BentreLevel;