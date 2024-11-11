import buildingImg from "/images/building-7466555_1920.jpg";
import flowersImg from "/images/flowers-4384227_1920.jpg";
import statueImg from "/images/statue-5135429_1920.jpg";
import InfoCard from "./InfoCard";
const GoalInfo = ()=>{

    const goalInfoArray:{title:string,description:string, imgUrl:string}[] = [{
        title: "Understand The Nation",
        description: "Explore the rich history of Vietnam, from ancient traditions to the evolution of its national identity.",
        imgUrl: buildingImg
    },
    {
        title: "Meaning of Harmony",
        description: "Discover the cultural balance in Vietnam, where nature and community thrive together in unity.",
        imgUrl: flowersImg
    },
    {
        title: "A Peaceful Side of Vietnam",
        description: "Experience the tranquil side of Vietnam, where peace and beauty replace memories of conflict.",
        imgUrl: statueImg
    }]

    const goalInfoCardArray = goalInfoArray.map((item, index)=>{
        return(
            <InfoCard key={index} imgUrl={item.imgUrl} title={item.title} description={item.description}></InfoCard>
        )
    })

    return (
        <div className="flex flex-wrap gap-5 justify-center w-[80%]">
            {goalInfoCardArray}
        </div>
    )
}

export default GoalInfo;