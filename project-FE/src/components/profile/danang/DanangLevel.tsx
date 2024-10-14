import QuizContents from "../QuizContents";
import { useState } from "react";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import DanangCulture from "./DanangCulture";
import DanangCuisine from "./DanangCuisine";
import DanangPeople from "./DanangPeople";
import cultureImg from "../../../images/danangStageImages/danangStageImg1.jpg";
import cuisineImg from "../../../images/danangStageImages/danangStageImg2.jpg";
import peopleImg from "../../../images/danangStageImages/danangStageImg3.jpg";
import quizImg from "../../../images/danangStageImages/danangStageImg4.jpg";
import StageArray from "../StageArray";
import backgroundImg from "../../../images/paperBg.jpg";


interface IDanangLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const DanangLevel:React.FC<IDanangLevel> = ({quizContents, userQuizContents})=>{
    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stages = [{
        name: "culture",
        img: cultureImg,
        title: "Chapter I",
        subtitle: "Da Nang’s Cultural Mosaic",
    },{
        name:"cuisine",
        img: cuisineImg,
        title: "Chapter II",
        subtitle: "Central Flavors, Coastal Delights"
    },{
        name:"people",
        img:peopleImg,
        title:"Chapter III",
        subtitle:"Warmth in Every Smile"
    },{
        name:"quiz",
        img:quizImg,
        title:"Chapter IV",
        subtitle:"Discover the Wonders of Da Nang"
    }
    ]

    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <DanangCulture></DanangCulture>
        }else if (currentStage === "people"){
            return <DanangPeople></DanangPeople>
        }else if(currentStage === "cuisine"){
            return <DanangCuisine></DanangCuisine>
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

export default DanangLevel;