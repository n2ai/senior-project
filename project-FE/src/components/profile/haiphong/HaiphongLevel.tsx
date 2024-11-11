import QuizContents from "../QuizContents";
import { quizContents } from "../../../routes/ProfileCity";
import { userQuizContents } from "../../../routes/ProfileCity";
import StageArray from "../StageArray";
import { useState } from "react";
import backgroundImg from "/images/paperBg.jpg";
import HaiphongCulture from "./HaiphongCulture";
import HaiphongPeople from "./HaiphongPeople";
import HaiphongCuisine from "./HaiphongCuisine";
import cultureImgHaiPhong from "/images/haiphongStageImages/haiphongStageImg1.jpg";
import cuisineImgHaiPhong from "/images/haiphongStageImages/haiphongStageImg2.jpg";
import peopleImgHaiPhong from "/images/haiphongStageImages/haiphongStageImg3.jpg";
import quizImgHaiPhong from "/images/haiphongStageImages/haiphongStageImg4.jpg";

interface IHaiphongLevel{
    quizContents: quizContents[],
    userQuizContents: userQuizContents
}

const HaiphongLevel:React.FC<IHaiphongLevel> = ({quizContents, userQuizContents})=>{
    const [currentStage, setCurrentStage] = useState<string>("culture");

    const stages = [{
            name: "culture",
            img: cultureImgHaiPhong,
            title: "Chapter I",
            subtitle: "Hai Phong’s Rich Cultural Heritage",
        },{
            name:"cuisine",
            img: cuisineImgHaiPhong,
            title: "Chapter II",
            subtitle: "Northern Flavors, Seaside Specialties"
        },{
            name:"people",
            img: peopleImgHaiPhong,
            title:"Chapter III",
            subtitle:"Strength and Warmth of Hai Phong"
        },{
            name:"quiz",
            img: quizImgHaiPhong,
            title:"Chapter IV",
            subtitle:"Explore the Heart of Hai Phong"
        }
    ]


    const stateRenderer = ()=>{
        if(currentStage === "culture"){
            return <HaiphongCulture></HaiphongCulture>
        }else if (currentStage === "people"){
            return <HaiphongPeople></HaiphongPeople>
        }else if(currentStage === "cuisine"){
            return <HaiphongCuisine></HaiphongCuisine>
        }else if(currentStage === "quiz"){
            return <QuizContents quizContents={quizContents} userQuizContents={userQuizContents} ></QuizContents>
        }
    }
    return(
        <div className="flex flex-col items-center w-full h-full"
        style={{ backgroundImage: `url(${backgroundImg})` }}>
            
            <div className="group flex w-full h-full">
                <StageArray className="text-black" stages={stages} currentStage={currentStage} setCurrentStage={setCurrentStage} />
            </div>
            
            <div className="w-full">
                {stateRenderer()}
            </div>
        </div>
    )
}

export default HaiphongLevel;