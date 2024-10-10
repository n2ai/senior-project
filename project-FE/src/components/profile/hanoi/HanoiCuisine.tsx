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

            return (
                <>
                </>  
            )

        }
    }

    return renderDescription()
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

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">The Unique Taste of Hanoi’s Food: A Culinary Journey</h1>
                <p className="indent-14 text-xl font-monospace">
                    Hanoi, the capital city of Vietnam, is a treasure trove of culinary wonders. 
                    Rich in history, culture, and tradition, its food is a reflection of the region’s spirit and way of life. Hanoi’s cuisine, known for its balance of flavors, represents a fusion of simplicity and complexity. Each dish tells a story, blending the fresh ingredients of northern Vietnam with subtle spices, herbs, and traditional cooking techniques that have been passed down through generations. 
                    To experience Hanoi’s food is to savor a unique mix of flavors that delight the senses.
                </p>

                <h1 className="font-bold text-3xl text-center">The Essence of Hanoi’s Food</h1>
                <p className="indent-14 text-xl font-monospace">
                    Hanoi’s cuisine is a delicate balance of the five fundamental taste elements—salty, 
                    sweet, sour, bitter, and umami. Unlike the spicy and bold flavors of central and 
                    southern Vietnam, the food in Hanoi tends to be milder, allowing the ingredients’ natural 
                    flavors to shine through. Simplicity and restraint are central to Hanoi’s culinary philosophy
                    . The essence of the cuisine lies in its use of fresh, local ingredients and 
                    subtle seasonings that are expertly layered to create depth and harmony.
                </p>
            </div>

            <ProfileCuisineSwiper setCurrentCard={setCurrentCard} swiperContents={swiperContents} ></ProfileCuisineSwiper>

            <div className='text-center mt-4 flex flex-col gap-10'>
                <div className="w-full h-full">
                    <h1 className="2xl font-bold">{swiperContents[currentCard].title}</h1>
                    <p className="xl">{swiperContents[currentCard].subtitle}</p>
                </div>

                {/**Description go here */}
                <div className="w-full h-full flex flex-col gap-10">

                </div>
            </div>
        </div>
    )
}

export default HanoiCusine;