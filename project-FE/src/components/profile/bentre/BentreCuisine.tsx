import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import coconutCandy from "../../../images/bentreLevelImages/coconutcandy.jpg";
import banhXeo from "../../../images/bentreLevelImages/banhxeo.jpg";
import huTieuBenTre from "../../../images/bentreLevelImages/hutieu.jpg";
import tomCangNuoc from "../../../images/bentreLevelImages/tomcangnuoc.jpg";
import banhCanhBotLoc from "../../../images/bentreLevelImages/banhcanhbotloc.jpg";
import chuoiNuong from "../../../images/bentreLevelImages/chuoinuong.jpg";

const BenTreCuisine = () => {
    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl: coconutCandy,
        title: "Kẹo Dừa",
        subtitle: "Coconut Candy: A Sweet Taste of Ben Tre",
        description: `Coconut candy, known as "kẹo dừa," is one of Ben Tre's most famous culinary delights. 
        This chewy, rich treat is made from coconut milk and sugar, with a variety of flavors like pandan, 
        durian, and chocolate often added for extra richness. The candy encapsulates the essence of Ben Tre’s 
        coconut culture, as it utilizes the abundant coconuts grown in the area and has become a beloved 
        local and international snack, capturing the sweet simplicity of Ben Tre’s cuisine.`
    }, {
        imgUrl: banhXeo,
        title: "Bánh Xèo",
        subtitle: "Banh Xeo: Ben Tre’s Coconut-Infused Pancake",
        description: `Ben Tre’s version of bánh xèo incorporates coconut milk into the batter, giving the pancake a subtly sweet 
        and aromatic flavor. Filled with shrimp, pork, and bean sprouts, the pancake is wrapped in fresh greens and herbs, 
        then dipped in a sweet and sour fish sauce. The coconut addition reflects the region’s bountiful coconut supply, 
        making this dish uniquely representative of Ben Tre.`
    }, {
        imgUrl: huTieuBenTre,
        title: "Hủ Tiếu Bến Tre",
        subtitle: "Hu Tieu Ben Tre: A Flavorful Noodle Soup",
        description: `Hu Tieu Ben Tre is a local twist on the traditional hu tieu noodle soup, featuring a rich, clear broth 
        made from pork bones and dried shrimp. The soup is served with rice noodles, tender pork, fresh herbs, and a touch of 
        coconut water to add a hint of sweetness. This combination creates a light yet flavorful dish that is distinctively 
        Ben Tre.`
    }, {
        imgUrl: tomCangNuoc,
        title: "Tôm Càng Nước",
        subtitle: "Tom Cang Nuoc: Coconut-Poached Prawns",
        description: `This dish highlights the region’s love for coconut and seafood, using large freshwater prawns poached 
        in a coconut milk sauce. The prawns are tender and sweet, while the coconut sauce provides a creamy texture and 
        fragrant finish. Tom cang nuoc showcases the creativity of Ben Tre’s cuisine, where seafood is combined with 
        coconut for a uniquely local flavor.`
    }, {
        imgUrl: banhCanhBotLoc,
        title: "Bánh Canh Bột Lọc",
        subtitle: "Banh Canh Bot Loc: A Chewy Tapioca Noodle Soup",
        description: `Banh canh bot loc is a soup made with thick tapioca noodles and a savory broth. The dish is often 
        served with slices of pork, shrimp, and fresh greens, offering a delightful mix of chewy noodles and a rich, 
        hearty broth. A dash of coconut milk adds a subtle sweetness to the broth, making it a comforting and unique 
        choice for visitors in Ben Tre.`
    }, {
        imgUrl: chuoiNuong,
        title: "Chuối Nướng",
        subtitle: "Grilled Banana with Coconut Sauce",
        description: `Chuoi nuong, or grilled banana, is a popular dessert in Ben Tre, often topped with a sweet and creamy 
        coconut sauce. The banana is grilled to perfection, caramelizing the sugars and enhancing its natural sweetness. 
        The coconut sauce adds a fragrant, silky texture, making it a favorite among locals and a delicious way to end 
        a meal in Ben Tre.`
    }];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Culinary Heritage of Ben Tre</h1>
                <p className="indent-14 text-xl font-monospace">
                    Ben Tre’s cuisine is deeply rooted in its abundant coconut resources, bringing unique flavors and textures 
                    to its dishes. From coconut-based sweets to savory dishes, Ben Tre’s culinary heritage reflects its natural 
                    resources and the creativity of its people, offering a vibrant and flavorful dining experience that is a 
                    testament to its rich cultural identity.
                </p>
                <p className="indent-14 text-xl font-monospace">
                    The region’s culinary traditions are marked by simplicity, freshness, and a harmonious balance of flavors, 
                    with an emphasis on coconut products that permeate all aspects of life in Ben Tre. This coconut-inspired 
                    cuisine not only adds depth to each dish but also represents the pride and ingenuity of Ben Tre’s people.
                </p>
            </div>

            <ProfileCuisineSwiper setCurrentCard={setCurrentCard} swiperContents={swiperContents} ></ProfileCuisineSwiper>

            <div className='mt-4 flex flex-col gap-10'>
                <div className="w-full flex flex-col items-center gap-3">
                    <h1 className="text-2xl font-bold text-center">{swiperContents[currentCard].title}</h1>
                    <div className="text-center border border-black h-0 w-[30%]"></div>
                    <p className="text-xl text-center">{swiperContents[currentCard].subtitle}</p>
                </div>

                {/** Description goes here */}
                <p className="indent-14 text-xl font-monospace">
                    {swiperContents[currentCard].description}
                </p>
            </div>
        </div>
    );
}

export default BenTreCuisine;
