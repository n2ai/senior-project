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
            subtitle:"Pho: A National Symbol of Hanoi",
            description: `No discussion about Hanoi’s food is complete without mentioning pho, 
            the city’s most famous dish. Pho is a simple yet extraordinary noodle soup, 
            often made with beef or chicken, and a clear, fragrant broth. 
            The taste of pho is a symphony of flavors: the broth, simmered for hours, 
            is infused with star anise, ginger, and cinnamon, creating a warm and savory base. 
            The rice noodles are tender but firm, while the thin slices of meat add richness. 
            Fresh herbs like coriander and scallions provide an earthy freshness, and a squeeze of lime adds a bright, 
            zesty contrast. Together, these elements create a perfect balance of savory, sweet, and slightly tangy notes, 
            making pho a comforting yet complex dish that defines Hanoi.`
        },{
            imgUrl:hanoiBunCha,
            title:"Bún Chả Hà Nội",
            subtitle:"Bun Cha: The Charcoal-Grilled Delight",
            description:`Another iconic Hanoi dish is bun cha, a meal that showcases the city’s mastery of 
            grilled flavors. Bun cha consists of succulent pork patties and slices of pork belly grilled over 
            charcoal, served with rice noodles, fresh herbs, and a dipping sauce made of fish sauce, vinegar, 
            sugar, and lime juice. The grilled pork, slightly smoky and caramelized, contrasts beautifully with 
            the cool, fresh herbs. The dipping sauce, a balance of sweet, sour, and savory, ties the dish together. 
            Bun cha’s distinctive taste comes from the interplay 
            between the grilled meat’s charred smokiness and the lightness of 
            the fresh herbs and noodles.`
        },{
            imgUrl:hanoiChaRuoi,
            title:"Chả Rươi",
            subtitle:"Cha Ruoi: A Seasonal Delicacy",
            description:`For those seeking a true Hanoi specialty, cha ruoi is a dish that showcases the city’s 
            appreciation for seasonal ingredients and bold flavors. Made from ruoi (ragworm), 
            this dish is typically available only during the late autumn months, making it a rare treat. 
            The preparation of cha ruoi involves mixing minced ragworm with eggs, minced pork, dill, tangerine zest, 
            and various spices before being pan-fried to golden perfection. The taste of cha ruoi is rich and complex: 
            the ragworm provides a slightly briny, oceanic flavor, while the eggs and pork give the dish a creamy, 
            hearty texture. The dill adds a fresh, herbaceous note, and the tangerine zest imparts a light citrus aroma 
            that lifts the dish. Served with a side of fish sauce for dipping, 
            cha ruoi is an unforgettable combination of savory, herbal, and aromatic flavors.`
        },{
            imgUrl:hanoiBanhCuon,
            title:"Bánh Cuốn",
            subtitle:"Banh Cuon: A Delicate Tradition",
            description:`Banh cuon, another beloved dish, is a delicate, savory treat that demonstrates 
            Hanoi’s commitment to fine textures and balance. These thin rice crepes are filled with minced pork 
            and wood ear mushrooms, then topped with fried shallots and served with a side of dipping sauce. 
            Banh cuon’s taste is light and subtle—the crepes are soft and tender, almost melting in the mouth, 
            while the filling adds a slightly earthy, savory flavor. The dipping sauce, a mild fish sauce with a 
            hint of sweetness, enhances the dish’s overall flavor without overpowering its delicate nature.`
        },{
            imgUrl:hanoiBunDau,
            title:"Bún Đậu Mắm Tôm",
            subtitle:"Bun Dau Mam Tom: A Bold Flavor Adventure",
            description: `Bun dau mam tom is another Hanoi specialty that delivers a powerful punch of flavor, 
            perfect for adventurous eaters. This dish is a combination of fried tofu (dau), rice vermicelli (bun), 
            and the infamous mam tom—fermented shrimp paste. The tofu is fried until crispy on the outside, with a soft, 
            pillowy interior. The rice noodles are fresh and chewy, providing a neutral base for the strong flavors. 
            However, it’s the mam tom that truly defines this dish. Pungent and salty, the fermented shrimp paste is 
            mixed with lime juice and chili, creating an umami-rich dipping sauce with an intense depth of flavor. 
            For those who enjoy bold, robust tastes, mam tom is a revelation, perfectly complementing the crispy tofu 
            and noodles. Often served with fresh herbs like perilla and mint, and sometimes accompanied by boiled pork 
            or fried spring rolls, bun 
            dau mam tom is a dish that celebrates the beauty of contrasts—crisp and soft, mild and strong, earthy and fresh.`
        },{
            imgUrl:hanoiCom,
            title:"Cốm Làng Vòng",
            subtitle:"Com Lang Vong: A Taste of Tradition",
            description:`Com Lang Vong is Hanoi’s cherished autumn delicacy, made from young green rice harvested and 
            roasted to perfection. The soft, chewy grains carry a mild sweetness and a nutty aroma, often enhanced 
            by being wrapped in fragrant lotus leaves. This seasonal treat offers a delicate balance of freshness and 
            subtle flavor, making it both a symbol of Hanoi’s agricultural heritage and a timeless culinary treasure. 
            Enjoyed on its own or paired with ripe bananas, 
            com Lang Vong is a pure, elegant taste of tradition that embodies the spirit of the city’s rich culture.`
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

            <div className='mt-4 flex flex-col gap-10'>
                
                <div className="w-full flex flex-col items-center gap-3">
                    <h1 className="text-2xl font-bold text-center">{swiperContents[currentCard].title}</h1>
                    <div className="text-center border border-black h-0 w-[30%]"></div>
                    <p className="text-xl text-center">{swiperContents[currentCard].subtitle}</p>
                </div>
                
                

                {/**Description go here */}
                <p className="indent-14 text-xl font-monospace">
                    {swiperContents[currentCard].description}
                </p>
            </div>
        </div>
    )
}

export default HanoiCusine;