import { useState } from "react";
import tutorialStageImg1 from "/images/tutorialStageImages/tutorialStageImg1.jpg";
import tutorialStageImg2 from "/images/tutorialStageImages/tutorialStageImg2.jpg";
import tutorialStageImg3 from "/images/tutorialStageImages/tutorialStageImg3.jpg";
import tutorialStageImg4 from "/images/tutorialStageImages/tutorialStageImg4.jpg";
import TutorialCuisine from "./TutorialCuisine";
import TutorialCulture from "./TutorialCulture";
import TutorialPeople from "./TutorialPeople";
import QuizContents from "../QuizContents";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import backgroundImg from "/images/paperBg.jpg";
import StageArray from "../StageArray";

interface ITutorialLevel{
    quizContents:quizContents[],
    userQuizContents: userQuizContents
}

const TutorialLevel:React.FC<ITutorialLevel> = ({quizContents, userQuizContents}) =>{

    const [currentStage, setCurrentStage] = useState<string>("culture")
    
    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <TutorialCulture></TutorialCulture>
        }else if(currentStage === "cuisine"){
            return <TutorialCuisine></TutorialCuisine>
        }else if(currentStage === "people"){
            return <TutorialPeople></TutorialPeople>
        }else if(currentStage === "quiz"){
            return <QuizContents userQuizContents={userQuizContents} quizContents={quizContents}></QuizContents>
        }
    }

    const stages = [
        {
            name:"culture",
            img:tutorialStageImg1,
            title:"Chapter I",
            subtitle:"The Culture"

        },{
            name:"cuisine",
            img:tutorialStageImg2,
            title:"Chapter II",
            subtitle:"The Cuisine"
        },{
            name:"people",
            img:tutorialStageImg3,
            title:"Chapter III",
            subtitle:"The People"
        },{
            name:"quiz",
            img:tutorialStageImg4,
            title:"Chapter IV",
            subtitle:"The Quiz"
        }
    ]

    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full">
                <StageArray stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} ></StageArray>
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default TutorialLevel;
