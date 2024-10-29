import InfoCard from "./InfoCard";
import thanhGiongImg from "../images/flying-horse-4579073_1920.png";
import cookingImg from "../images/cooking-6760877_1920.jpg";
import boatImg from "../images/boat-8270209_1920.jpg"

const TopicInfo = ()=>{
    //Cuisine
    //People
    //Culture

    const topicInfoArray:{title:string,description:string,imgUrl:string}[] = [{
        title: "People",
        description: "Meet the diverse and resilient people of Vietnam, known for their warmth and hospitality.",
        imgUrl: thanhGiongImg
    },
    {
        title: "Cuisine",
        description: "Discover Vietnam's rich culinary heritage, celebrated for its unique flavors and fresh ingredients.",
        imgUrl: cookingImg
    },
    {
        title: "Culture",
        description: "Explore Vietnam's vibrant culture, steeped in traditions, festivals, and artistic expressions.",
        imgUrl: boatImg
    }]


    const GeneralInfoCardArray = topicInfoArray.map((item, index)=>{
        return(
            <InfoCard key={index} imgUrl={item.imgUrl} title={item.title} description={item.description}></InfoCard>
        )
    }) 

    return(
        <div className="flex flex-wrap gap-5 justify-center w-[80%]">
            {GeneralInfoCardArray}
        </div>
    )
}

export default TopicInfo;