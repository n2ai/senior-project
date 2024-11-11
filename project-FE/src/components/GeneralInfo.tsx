import InfoCard from "./InfoCard";
import uhdImg from "/images/uhd.jpeg"
import vietnamBWImg from "/images/vietnamBW.jpg"
import oldWomanImg from "/images/old-woman-5893415_1920.jpg"

const GeneralInfo = ()=>{

    const cardInfomation:{imgUrl:string, title:string, description:string}[] = [
        {
            imgUrl: uhdImg,
            title: "Senior Project",
            description: "A final-year project showcasing technical and creative skills through an immersive virtual experience."
        },
        {
            imgUrl: vietnamBWImg,
            title: "My Story",
            description: "A personal journey through Vietnam"
        },
        {
            imgUrl: oldWomanImg,
            title: "To express my love",
            description: "A tribute to the warmth and resilience of the people of Vietnam, capturing moments of love and tradition."
        }
    ] 

    const GeneralInfoCardArray = cardInfomation.map((item, index)=>{
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

export default GeneralInfo;