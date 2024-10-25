import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useEffect, useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import bunQuay from "../../../images/phuQuocLevelImages/bunquay.jpg";
import kenNoodleSoup from "../../../images/phuQuocLevelImages/kennoodlesoup.jpg";
import grilledSeafood from "../../../images/phuQuocLevelImages/grilledseafood.jpg";
import fishSauce from "../../../images/phuQuocLevelImages/fishsauce.jpg";
import seaUrchin from "../../../images/phuQuocLevelImages/seaurchin.jpg";
import pepperFarm from "../../../images/phuQuocLevelImages/pepperfarm.jpg";
import phuQuocFoodStall1 from "../../../images/phuQuocLevelImages/phuquocfoodstall1.jpg";
import phuQuocFoodStall2 from "../../../images/phuQuocLevelImages/phuquocfoodstall2.jpg";
import phuQuocFoodStall3 from "../../../images/phuQuocLevelImages/phuquocfoodstall3.jpg";

const PhuQuocCuisine = () => {

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl: bunQuay,
        title: "Bún Quậy",
        subtitle: "Bun Quay: Phu Quoc’s Unique Noodle Experience",
        description: `Bún quậy, a specialty noodle soup of Phu Quoc, is a favorite among locals. Diners add fresh shrimp, fish paste, and seasonings directly into the bowl, stirring (or "quay") to mix the ingredients with rice noodles. This interactive dish highlights the island’s fresh seafood and the simplicity of coastal flavors, making it an engaging and flavorful experience.`
    }, {
        imgUrl: kenNoodleSoup,
        title: "Bún Kèn",
        subtitle: "Bun Ken: A Fusion of Flavors",
        description: `Bún kèn, a noodle soup made from minced fish and coconut milk, reflects Phu Quoc’s culinary uniqueness. The dish is spiced with lemongrass and turmeric, giving it a rich and creamy texture that contrasts beautifully with fresh herbs and bean sprouts. Originating from Khmer influences, bún kèn showcases the fusion of regional flavors that characterize Phu Quoc’s food culture.`
    }, {
        imgUrl: grilledSeafood,
        title: "Grilled Seafood",
        subtitle: "Grilled Seafood: The Taste of the Ocean",
        description: `Grilled seafood is a must-try on Phu Quoc, featuring an array of fresh fish, squid, and prawns cooked over charcoal. Served with simple condiments like salt, pepper, and lime, Phu Quoc’s grilled seafood reflects the islanders’ love for freshness and natural flavors, celebrating the abundance of the ocean with every bite.`
    }, {
        imgUrl: fishSauce,
        title: "Nước Mắm Phú Quốc",
        subtitle: "Phu Quoc Fish Sauce: Liquid Gold of Vietnam",
        description: `Phu Quoc is world-renowned for its fish sauce, or "nước mắm," a staple ingredient in Vietnamese cuisine. Made from anchovies and salt, this amber liquid is aged in wooden barrels for up to a year, resulting in a rich and flavorful sauce. Phu Quoc’s fish sauce has a distinctive taste due to the island's specific anchovy variety and traditional production techniques, making it a symbol of Vietnamese culinary heritage.`
    }, {
        imgUrl: seaUrchin,
        title: "Nhím Biển",
        subtitle: "Sea Urchin: A Rare Delicacy",
        description: `Sea urchin, or "nhím biển," is a popular delicacy in Phu Quoc. It is often grilled with scallions and peanuts, or served raw with lime. Known for its creamy texture and briny taste, sea urchin is a true reflection of Phu Quoc’s maritime offerings and a must-try for adventurous eaters looking to savor the island’s coastal specialties.`
    }, {
        imgUrl: pepperFarm,
        title: "Pepper Farms",
        subtitle: "Phu Quoc Pepper: Spicy Treasure of the Island",
        description: `Phu Quoc pepper is another key ingredient from the island, prized for its unique aroma and spicy flavor. Local farms cultivate peppercorns using traditional methods, creating a product that’s sought after both domestically and internationally. Phu Quoc’s pepper farms reflect the island’s agricultural heritage and offer visitors a taste of this distinctive spice.`
    }];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Phu Quoc Cuisine: A Taste of the Sea and Spice</h1>
                <p className="indent-14 text-xl font-monospace">
                    Phu Quoc, with its lush landscapes and surrounding waters, offers a unique culinary experience that showcases fresh seafood and rich flavors. 
                    The island’s cuisine is a blend of Vietnamese tradition and local ingredients, including famous pepper and fish sauce, making it a paradise for food lovers.
                </p>

                <div className="flex flex-col items-center">
                    <img src={phuQuocFoodStall3} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Phu Quoc</p>
                </div>

                <h1 className="font-bold text-3xl text-center">A Culinary Tradition Built on the Sea</h1>
                <p className="indent-14 text-xl font-monospace">
                    The people of Phu Quoc have relied on the ocean for sustenance and livelihood. The cuisine reflects this connection, with seafood dishes like bún quậy and grilled shellfish served fresh daily. 
                    Phu Quoc’s culinary heritage is deeply intertwined with its coastal resources and the flavors of the island’s natural bounty.
                </p>

                <div className="flex flex-col items-center">
                    <img src={phuQuocFoodStall2} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Phu Quoc</p>
                </div>

                <h1 className="font-bold text-3xl text-center">The Essence of Street Food Culture</h1>
                <p className="indent-14 text-xl font-monospace">
                    Phu Quoc's street food is a lively blend of flavors from land and sea. From freshly grilled seafood to pepper-infused dishes, 
                    each offering reflects the island's natural abundance and cultural heritage, making Phu Quoc a must-visit destination for culinary explorers.
                </p>

                <div className="flex flex-col items-center">
                    <img src={phuQuocFoodStall1} className="w-[500px]">
                    </img>
                    <p className="italic">A Food Stall in Phu Quoc</p>
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

export default PhuQuocCuisine;
