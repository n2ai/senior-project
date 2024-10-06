import cultureImg from "../../../images/hanoiStageImages/pexels-alwaysontheroad-2977432.jpg";
import peopleImg from "../../../images/hanoiStageImages/pho-ha-noi-banner.jpg";
import cuisineImg from "../../../images/hanoiStageImages/pexels-huy-phan-316220-1437618.jpg";
import quizImg from "../../../images/hanoiStageImages/pexels-boser-dam-1598322793-28494588.jpg";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import backgroundImg from "../../../images/paperBg.jpg";
import HanoiCusine from "./HanoiCuisine";
import HanoiCulture from "./HanoiCulture";
import HanoiPeople from "./HanoiPeople";
import QuizContents from "../QuizContents";
import { useState } from "react";

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
            
            <div className="group flex w-full h-full">
                {stageArray}
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default HanoiLevel