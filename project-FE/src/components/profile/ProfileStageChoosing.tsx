import cultureImgUrl from "../../images/hanoiStageImages/pexels-alwaysontheroad-2977432.jpg";
import cuisineImgUrl from "../../images/hanoiStageImages/pho-ha-noi-banner.jpg";
import peopleImgUrl from "../../images/hanoiStageImages/pexels-huy-phan-316220-1437618.jpg";
import quizImgUrl from "../../images/hanoiStageImages/pexels-boser-dam-1598322793-28494588.jpg";

/**Test import contents */
import TutorialPeople from "./tutorial/tutorialPeople";
import TutorialCulture from "./tutorial/TutorialCulture"
import TutorialCuisine from "./tutorial/TutorialCuisine";
interface IProfileStageChoosing{
    title?:string,
    subtitle?:string
}

const ProfileStageChoosing:React.FC<IProfileStageChoosing> = ({title, subtitle}) =>{

    const stages = [
        {
            name:"culture",
            img:cultureImgUrl,
            title:"Chapter I",
            subtitle:"The Culture"

        },{
            name:"cuisine",
            img:cuisineImgUrl,
            title:"Chapter II",
            subtitle:"The Cuisine"
        },{
            name:"people",
            img:peopleImgUrl,
            title:"Chapter III",
            subtitle:"The People"
        },{
            name:"quiz",
            img:quizImgUrl,
            title:"Chapter IV",
            subtitle:"The Quiz"
        }
    ]

    const stageArray = stages.map((item, index)=>{
            return(
                <div key={index} style={{ backgroundImage: `url(${item.img})` }} className={`bg-center bg-cover h-screen w-1/4 hover:w-1/2 transition-all duration-1000`}>
                    <div className="flex flex-col items-center mt-5">
                        <h1 className="text-5xl font-bold caligraphy text-black-500">{item.title}</h1>
                        <p className="text-2xl font-bold">{item.subtitle}</p>
                    </div>
                </div>
            )
    })

    return(
        <div className="flex flex-col items-center w-full h-full">
            

            {/**Stage Choosing */}
            <div className="flex w-full h-full">
                {stageArray}
            </div>
            
            {/**Content */}
            {/**h-screen for temporary */}
            <div className="w-full">
                <TutorialCuisine></TutorialCuisine>
            </div>

            {/* *Quiz
            <div>

            </div> */}
        </div>
    )
}

export default ProfileStageChoosing;
