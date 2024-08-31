import buildingImg from "../images/building-7466555_1920.jpg";
import flowersImg from "../images/flowers-4384227_1920.jpg";
import statueImg from "../images/statue-5135429_1920.jpg";
import InfoCard from "./InfoCard";
const GoalInfo = ()=>{

    const goalInfoArray:{title:string,description:string, imgUrl:string}[] = [{
        title:"Understand The Nation",
        description:"This is history",
        imgUrl:buildingImg
    },{
        title:"Meaning of Harmony",
        description:"Meaning of Harmony",
        imgUrl:flowersImg
    },{
        title:"A Peaceful Side of Vietnam",
        description:"No War, Just Peace",
        imgUrl: statueImg
    }]

    const goalInfoCardArray = goalInfoArray.map((item)=>{
        return(
            <InfoCard imgUrl={item.imgUrl} title={item.title} description={item.description}></InfoCard>
        )
    })

    return (
        <div className="flex flex-wrap gap-5 justify-center w-[80%]">
            {goalInfoCardArray}
        </div>
    )
}

export default GoalInfo;