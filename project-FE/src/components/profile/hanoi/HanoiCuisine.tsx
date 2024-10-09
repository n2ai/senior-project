import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useEffect, useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import hanoiBanhCuon from "../../../images/hanoiLevelImages/hanoibanhcuon.jpeg";
import hanoiPho from "../../../images/hanoiLevelImages/phohanoi.jpeg";
import hanoiBunCha from "../../../images/hanoiLevelImages/hanoiBuncha.jpg";
import hanoiChaRuoi from "../../../images/hanoiLevelImages/hanoicharuoi.jpg";
import hanoiBunDau from "../../../images/hanoiLevelImages/hanoibundau.jpg";
import hanoiCom from "../../../images/hanoiLevelImages/hanoicom.jpg";

interface IDescriptionContent{
    currentSlide : number,
    contents: swiperContent
}

const DescriptionContent:React.FC<IDescriptionContent> = ({currentSlide, contents})=>{

    
    const renderDescription = ()=>{
        if(currentSlide === 0){

            return(
                <>
                    <div className="w-full h-full">
                        <h1 className="2xl font-bold">{contents.title}</h1>
                        <p className="xl">{contents.subtitle}</p>
                    </div>


                    <div></div>
                </>
            )
        }
    }

    return(

        <div className="w-full h-full">

        </div>
    )
}

const HanoiCusine = ()=>{

    const [currentCard, setCurrentCard] = useState<number>(0);

    //Contents for the card:
    const swiperContents:swiperContent[] = [{

            imgUrl:hanoiPho,
            title:"Phở Hà Nội",
            subtitle:"Ha Noi Beef Pho"
        },{
            imgUrl:hanoiBunCha,
            title:"Bún Chả Hà Nội",
            subtitle:"Ha Noi Grilled Pork Vermicelli"
        },{
            imgUrl:hanoiChaRuoi,
            title:"Chả Rươi",
            subtitle:"Sand Worm Omelette"
        },{
            imgUrl:hanoiBanhCuon,
            title:"Bánh Cuốn",
            subtitle:"Vietnamese Rice Cake"
        },{
            imgUrl:hanoiBunDau,
            title:"Bún Đậu Mắm Tôm",
            subtitle:"Ha Noi Fried Tofu with Vermicelli"
        },{
            imgUrl:hanoiCom,
            title:"Cốm Làng Vòng",
            subtitle:"Green Rice"
        }
    ]
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            <ProfileCuisineSwiper setCurrentCard={setCurrentCard} swiperContents={swiperContents} ></ProfileCuisineSwiper>

            <div className='text-center mt-4'>
                <div className="w-full h-full">
                        <h1 className="2xl font-bold">{swiperContents[currentCard].title}</h1>
                        <p className="xl">{swiperContents[currentCard].subtitle}</p>
                </div>

                {/**Description go here */}
            </div>
        </div>
    )
}

export default HanoiCusine;