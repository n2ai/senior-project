import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import {useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import khauNhuc from "/images/langsonLevelImages/khaunhuc.jpg";
import phoChua from "/images/langsonLevelImages/phoChua.jpg";
import vitQuay from "/images/langsonLevelImages/vitquay.jpg";
import banhCuon from "/images/langsonLevelImages/banhcuonlangson.jpg";
import lonQuay from "/images/langsonLevelImages/lonquaylangson.jpg";
import langsonFoodStall1 from "/images/langsonLevelImages/langsonfoodstall1.jpg";
import langsonFoodStall2 from "/images/langsonLevelImages/langsonfoodstall2.jpg";
import langsonFoodStall3 from "/images/langsonLevelImages/langsonfoodstall3.jpg";

const LangSonCuisine = () => {

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl: khauNhuc,
        title: "Khau Nhục",
        subtitle: "Khau Nhục: Steamed Pork Belly with Taro",
        description: `Khau Nhục is a rich dish in Lang Son made from pork belly marinated and steamed with taro and herbs. 
        This dish is cooked over a long time to reach a soft, melt-in-the-mouth texture and is typically enjoyed during special occasions. 
        The layers of pork and taro create a unique texture that showcases the earthy flavors of northern Vietnamese cuisine.`
    }, {
        imgUrl: phoChua,
        title: "Phở Chua",
        subtitle: "Pho Chua: Sour Noodles of Lang Son",
        description: `Lang Son's unique take on pho, Pho Chua (sour pho), features tangy noodles served with duck, pork, or beef, along with peanuts, herbs, and a sour tamarind-based sauce. 
        This refreshing dish is typically eaten during hot weather and is perfect for those who enjoy a balance of sour, savory, and crunchy textures in their meals.`
    }, {
        imgUrl: vitQuay,
        title: "Vịt Quay",
        subtitle: "Vit Quay: Roast Duck of Lang Son",
        description: `Lang Son is famous for its roast duck, marinated with honey, herbs, and the fragrant leaves of the local mac mat tree. 
        This dish is juicy and flavorful, with a crispy skin and tender meat, making it a must-try for visitors who want to experience Lang Son's traditional flavors.`
    }, {
        imgUrl: banhCuon,
        title: "Bánh Cuốn",
        subtitle: "Banh Cuon: Lang Son Style Steamed Rice Rolls",
        description: `Lang Son’s bánh cuốn, or steamed rice rolls, are filled with seasoned minced pork and wood ear mushrooms. 
        They are served with a special dipping sauce that includes fragrant herbs and a touch of sourness, reflecting the unique taste preferences of Lang Son cuisine.`
    }, {
        imgUrl: lonQuay,
        title: "Lợn Quay",
        subtitle: "Lon Quay: Lang Son Roast Pork",
        description: `Lang Son’s roast pork is a traditional dish prepared with marinated pork that is spit-roasted to achieve a crispy outer layer. 
        It’s typically served with a sweet and savory dipping sauce, giving a unique twist to classic roast pork and making it popular at celebrations and festivals in the region.`
    }];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Lang Son Cuisine: A Northern Flavors Journey</h1>
                <p className="indent-14 text-xl font-monospace">
                    Lang Son, a mountainous region in northern Vietnam, is renowned for its distinct culinary traditions. 
                    Influenced by the rugged terrain and the ethnic diversity of its people, Lang Son’s food reflects a blend of bold flavors and unique preparations, 
                    making it a destination rich in northern Vietnamese cuisine.
                </p>

                <div className="flex flex-col items-center">
                    <img src={langsonFoodStall3} className="w-[1000px]">
                    </img>
                    <p className="italic">A Traditional Food Stall in Lang Son</p>
                </div>

                <h1 className="font-bold text-3xl text-center">Flavors Rooted in the Mountains</h1>
                <p className="indent-14 text-xl font-monospace">
                    The flavors of Lang Son's cuisine draw from its mountainous geography and cultural diversity. 
                    Ingredients like mac mat leaves, a fragrant local herb, add distinct tastes to dishes like roast duck and pork. 
                    Each meal in Lang Son reflects a harmony between the environment and the heritage of its people.
                </p>

                <div className="flex flex-col items-center">
                    <img src={langsonFoodStall2} className="w-[1000px]">
                    </img>
                    <p className="italic">Traditional Dishes at a Food Stall</p>
                </div>

                <h1 className="font-bold text-3xl text-center">Street Foods and Celebrations</h1>
                <p className="indent-14 text-xl font-monospace">
                    Lang Son’s street food offers a mix of flavors and textures from simple, savory bites to hearty dishes often served at festivals. 
                    From sour noodles to roasted pork, the variety of street foods encapsulates Lang Son’s culinary charm, showcasing the local ingredients and spices.
                </p>

                <div className="flex flex-col items-center">
                    <img src={langsonFoodStall1} className="w-[500px]">
                    </img>
                    <p className="italic">A Local Food Stall in Lang Son</p>
                </div>
            </div>

            <h1 className="font-bold text-3xl text-center">Food Gallery</h1>
            <ProfileCuisineSwiper setCurrentCard={setCurrentCard} swiperContents={swiperContents} ></ProfileCuisineSwiper>

            <div className='mt-4 flex flex-col gap-10'>

                <div className="w-full flex flex-col items-center gap-3">
                    <h1 className="text-2xl font-bold text-center">{swiperContents[currentCard].title}</h1>
                    <div className="text-center border border-black h-0 w-[30%]"></div>
                    <p className="text-xl text-center">{swiperContents[currentCard].subtitle}</p>
                </div>

                <p className="indent-14 text-xl font-monospace">
                    {swiperContents[currentCard].description}
                </p>
            </div>
        </div>
    )
}

export default LangSonCuisine;
