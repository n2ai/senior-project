import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import banhDaCua from "../../../images/haiphongLevelImages/banhdacua.jpg";
import nemCuaBe from "../../../images/haiphongLevelImages/nemcuabe.jpg";
import banhMiQue from "../../../images/haiphongLevelImages/banhmique.jpg";
import lauCuaDong from "../../../images/haiphongLevelImages/laucuadong.jpg";
import cheBotLoc from "../../../images/haiphongLevelImages/chebotloc.jpg";
import oc from "../../../images/haiphongLevelImages/oc.jpg";

const HaiphongCuisine = () => {

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
            imgUrl: banhDaCua,
            title: "Bánh Đa Cua",
            subtitle: "Banh Da Cua: A Hearty Crab Noodle Soup",
            description: `Banh da cua is a signature dish of Hai Phong, featuring thick red noodles made from rice flour and a flavorful crab broth. 
            The dish is topped with a variety of ingredients such as crab meat, pork, shrimp, fried tofu, and water morning glory. 
            The broth is the star, rich in flavor from simmered crab shells and seasoned with crab fat, which gives it a vibrant reddish hue. 
            A hint of chili, a squeeze of lime, and fresh herbs complete this hearty bowl, making banh da cua a true representation of Hai Phong's coastal cuisine.`
        }, {
            imgUrl: nemCuaBe,
            title: "Nem Cua Bể",
            subtitle: "Nem Cua Be: Crab Spring Rolls",
            description: `Nem cua be, or crab spring rolls, are a specialty of Hai Phong, showcasing the region's abundance of seafood. 
            These square-shaped spring rolls are filled with a mixture of fresh crab meat, pork, mushrooms, and vermicelli noodles. 
            They are wrapped in rice paper and deep-fried to a golden crisp. Served with fresh herbs and a tangy dipping sauce made from fish sauce, 
            garlic, and chili, nem cua be offers a delightful combination of crunchy textures and savory seafood flavors that are both rich and refreshing.`
        }, {
            imgUrl: banhMiQue,
            title: "Bánh Mì Que",
            subtitle: "Banh Mi Que: Hai Phong’s Mini Baguette",
            description: `Banh mi que is a unique take on the traditional Vietnamese banh mi, found predominantly in Hai Phong. 
            These mini baguettes are filled with pâté and a spicy chili sauce, offering a simple yet flavorful snack. 
            The crispness of the baguette contrasts perfectly with the smooth, rich pâté and the bold heat of the chili sauce. 
            Banh mi que is often enjoyed as a quick street food snack, embodying the vibrant and bustling food scene of Hai Phong.`
        }, {
            imgUrl: lauCuaDong,
            title: "Lẩu Cua Đồng",
            subtitle: "Lau Cua Dong: Hot Pot with Crab Paste",
            description: `Lau cua dong is a rustic hot pot dish featuring crab paste as its base, popular in Hai Phong. 
            The broth, made from freshwater crabs, is rich, tangy, and savory, with a distinctive aroma. The hot pot is filled 
            with a variety of ingredients such as tofu, mushrooms, water spinach, and sometimes freshwater snails or shrimp. 
            Diners cook the ingredients in the bubbling pot at the table, enjoying the communal aspect of this warming dish, 
            which showcases the fresh seafood and rich flavors of Hai Phong.`
        }, {
            imgUrl: cheBotLoc,
            title: "Chè Bột Lọc",
            subtitle: "Che Bot Loc: Sweet Taro and Cassava Soup",
            description: `Che bot loc is a traditional dessert in Hai Phong, made from cassava pearls (bot loc) that are filled with 
            sweet taro or mung bean paste. These chewy pearls are cooked in a sweet syrup infused with pandan leaves, 
            often served with coconut milk for added richness. The dish combines the soft texture of the filling with the 
            chewiness of the pearls, offering a delightful and refreshing sweet treat, perfect for cooling down on a hot day in Hai Phong.`
        }, {
            imgUrl: oc,
            title: "Ốc Hải Phòng",
            subtitle: "Oc: Hai Phong's Snail Dishes",
            description: `Oc, or snail dishes, are a beloved part of Hai Phong's food culture. Street vendors and restaurants 
            across the city offer a wide variety of snail dishes, prepared with different sauces and spices. Whether stir-fried with 
            lemongrass and chili or boiled and served with a spicy fish sauce dip, these dishes highlight the freshness of the local 
            seafood and the bold, fragrant flavors typical of northern Vietnamese cuisine. Hai Phong’s snail dishes are often enjoyed 
            with a cold beer and shared among friends, reflecting the social nature of the city's dining scene.`
        }
    ];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Culinary Heritage</h1>
                <p className="indent-14 text-xl font-monospace"> 
                    Hai Phong is known for its diverse and vibrant food culture, with dishes that reflect the coastal city's 
                    rich resources and historical influences. From hearty seafood soups like banh da cua to indulgent treats 
                    like nem cua be, the city offers a wide range of flavors that are bold, fresh, and satisfying.
                </p>

                <p className="indent-14 text-xl font-monospace">
                    Seafood plays a central role in Hai Phong’s cuisine, with many of its iconic dishes featuring fresh crab, 
                    snails, and fish. The city’s proximity to the sea ensures that its dishes are always bursting with flavor, 
                    making Hai Phong a paradise for seafood lovers. Beyond seafood, the city’s street food culture, 
                    including unique dishes like banh mi que, also offers an exciting culinary experience.
                </p>
            </div>

            <ProfileCuisineSwiper setCurrentCard={setCurrentCard} swiperContents={swiperContents} />

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
    );
};

export default HaiphongCuisine;
