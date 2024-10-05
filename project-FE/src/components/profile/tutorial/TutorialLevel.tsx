import { useState } from "react";
import tutorialStageImg1 from "../../../images/tutorialStageImages/tutorialStageImg1.jpg";
import tutorialStageImg2 from "../../../images/tutorialStageImages/tutorialStageImg2.jpg";
import tutorialStageImg3 from "../../../images/tutorialStageImages/tutorialStageImg3.jpg";
import tutorialStageImg4 from "../../../images/tutorialStageImages/tutorialStageImg4.jpg";
import TutorialCuisine from "./TutorialCuisine";
import TutorialCulture from "./TutorialCulture";
import TutorialPeople from "./tutorialPeople";
import QuizContents from "../QuizContents";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import backgroundImg from "../../../images/paperBg.jpg";

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



    const stageArray = stages.map((item, index)=>{
            return(
                <div onClick={()=>setCurrentStage(item.name)} key={index} style={{ backgroundImage: `url(${item.img})` }} 
                className={` bg-center cursor-pointer bg-cover h-screen hover:w-1/2 transition-all duration-1000 ${currentStage == item.name ? "w-1/2" : "w-1/4"}`}>
                    <div className="flex flex-col items-center mt-5">
                        <h1 className="text-5xl font-bold caligraphy text-black-500">{item.title}</h1>
                        <p className="text-2xl font-bold">{item.subtitle}</p>
                    </div>
                </div>
            )
    })

    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            

            {/**Stage Choosing */}
            <div className="group flex w-full h-full">
                {stageArray}
            </div>
            
            {/**Content */}
            {/**h-screen for temporary */}
            <div className="w-full">
                {stateRenderer()}
            </div>

            {/* *Quiz
            <div>

            </div> */}
        </div>
    )
}

export default TutorialLevel;
