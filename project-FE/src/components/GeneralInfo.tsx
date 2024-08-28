import InfoCard from "./InfoCard";
import uhdImg from "../images/uhd.jpeg"
import vietnamBWImg from "../images/vietnamBW.jpg"
import oldWomanImg from "../images/old-woman-5893415_1920.jpg"

const GeneralInfo = ()=>{

    const cardInfomation:{imgUrl:string, title:string, description:string}[] = [{
        imgUrl:uhdImg,
        title:"Senior Project",
        description:"Senior Project"
    },{
        imgUrl:vietnamBWImg,
        title:"My Story",
        description:"My Story",
    },{
        imgUrl:oldWomanImg,
        title:"To express my love",
        description:"My Love"
    }] 

    const GeneralInfoCardArray = cardInfomation.map((item)=>{
        return(
            <InfoCard imgUrl={item.imgUrl} title={item.title} description={item.description}></InfoCard>
        )
    })

    return(
        <div className="flex flex-wrap justify-between">
            {GeneralInfoCardArray}
        </div>
    )
}

export default GeneralInfo;