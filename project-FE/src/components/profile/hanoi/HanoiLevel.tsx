import cultureImg from "/images/hanoiStageImages/pexels-alwaysontheroad-2977432.jpg";
import cuisineImg from "/images/hanoiStageImages/pho-ha-noi-banner.jpg";
import peopleImg from "/images/hanoiStageImages/pexels-huy-phan-316220-1437618.jpg";
import quizImg from "/images/hanoiStageImages/pexels-boser-dam-1598322793-28494588.jpg";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import backgroundImg from "/images/paperBg.jpg";
import HanoiCusine from "./HanoiCuisine";
import HanoiCulture from "./HanoiCulture";
import QuizContents from "../QuizContents";
import HanoiPeople from "./HanoiPeople";
import { useState } from "react";
import StageArray from "../StageArray";

interface IHanoiLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents,
}

const HanoiLevel:React.FC<IHanoiLevel> = ({quizContents, userQuizContents})=>{
    const [currentStage, setCurrentStage] = useState<string>("culture")

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <HanoiCulture></HanoiCulture>
        }else if (currentStage === "people"){
            return <HanoiPeople></HanoiPeople>
        }else if(currentStage === "cuisine"){
            return <HanoiCusine></HanoiCusine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }

    const stages = [{
        name: "culture",
        img: cultureImg,
        title: "Chapter I",
        subtitle: "The Heart of Vietnam",
    },{
        name:"cuisine",
        img: cuisineImg,
        title: "Chapter II",
        subtitle: "Perfect Combination"
    },{
        name:"people",
        img:peopleImg,
        title:"Chapter III",
        subtitle:"The Charm in the Heart"
    },{
        name:"quiz",
        img:quizImg,
        title:"Chapter IV",
        subtitle:"The Trials"
    }
    ]

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

export default HanoiLevel