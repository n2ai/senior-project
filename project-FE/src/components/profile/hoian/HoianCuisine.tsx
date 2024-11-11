import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import caoLau from "/images/hoianLevelImages/caolau.jpg";
import hoanhThanh from "/images/hoianLevelImages/hoanhthanh.jpg";
import banhBaoBanhVac from "/images/hoianLevelImages/banhbaobanhvac.jpg";
import banhXeoHoiAn from "/images/hoianLevelImages/banhxeohoian.jpg";
import miQuang from "/images/hoianLevelImages/miquanghoian.jpg";
import comGa from "/images/hoianLevelImages/comgahoian.jpg";
import hoianfoodstall1 from "/images/hoianLevelImages/hoianfoodstall1.jpg";
import hoianfoodstall2 from "/images/hoianLevelImages/hoianfoodstall2.jpg";
import hoianfoodstall3 from "/images/hoianLevelImages/hoianfoodstall3.jpg";

const HoiAnCuisine = () => {

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl: caoLau,
        title: "Cao Lầu",
        subtitle: "Cao Lau: Hoi An's Signature Dish",
        description: `Cao lầu is a noodle dish unique to Hoi An, featuring thick, chewy noodles served with slices of pork, fresh herbs, and crispy rice crackers. 
        The dish is distinct due to its noodles, traditionally cooked with water from the ancient wells of Hoi An and lye made from local trees, giving them a unique texture and flavor. 
        Served with minimal broth, cao lầu is a dish that captures the essence of Hoi An's culinary heritage, combining local ingredients with historical influences from China and Japan.`
    }, {
        imgUrl: hoanhThanh,
        title: "Hoành Thánh",
        subtitle: "Hoanh Thanh: Hoi An’s Wonton Delight",
        description: `Hoi An's hoành thánh, or wontons, reflect the city's rich multicultural past. This dish features crispy or boiled wontons filled with pork or shrimp, often topped with a tangy tomato-based sauce. 
        Though originally a Chinese dish, Hoi An’s version is uniquely Vietnamese, with local herbs and flavors infused into the recipe. It’s commonly served as a snack or appetizer at both street stalls and fine dining restaurants.`
    }, {
        imgUrl: banhBaoBanhVac,
        title: "Bánh Bao Bánh Vạc",
        subtitle: "Banh Bao Banh Vac: White Rose Dumplings",
        description: `Bánh bao bánh vạc, also known as White Rose Dumplings, are a specialty of Hoi An. These delicate dumplings are made from translucent rice paper and filled with minced shrimp or pork. 
        Their shape resembles a blooming rose, giving them their poetic name. Served with a light fish sauce for dipping, White Rose Dumplings are a must-try for anyone visiting Hoi An, offering a subtle balance of flavors and textures.`
    }, {
        imgUrl: banhXeoHoiAn,
        title: "Bánh Xèo",
        subtitle: "Banh Xeo: Crispy Vietnamese Pancake",
        description: `Hoi An’s version of bánh xèo, a savory Vietnamese pancake, is smaller and often filled with shrimp, pork, and bean sprouts. 
        The pancake is crispy on the outside, soft on the inside, and served with fresh herbs and lettuce for wrapping. The dish is accompanied by a sweet and tangy dipping sauce, making it a refreshing street food experience in Hoi An.`
    }, {
        imgUrl: miQuang,
        title: "Mì Quảng",
        subtitle: "Mi Quang: Central Vietnam’s Noodle Dish",
        description: `Mì Quảng is a central Vietnamese noodle dish that's especially beloved in Hoi An. Made with wide, flat rice noodles and served in a small amount of flavorful broth, 
        the dish is topped with a variety of ingredients, including shrimp, pork, quail eggs, and peanuts. Mì Quảng is often garnished with fresh herbs, banana blossoms, and crispy rice crackers, making it a vibrant, colorful dish.`
    }, {
        imgUrl: comGa,
        title: "Cơm Gà",
        subtitle: "Com Ga: Hoi An’s Famous Chicken Rice",
        description: `Cơm gà, or chicken rice, is a simple yet flavorful dish that has become one of Hoi An’s most iconic foods. The rice is cooked in chicken broth, infused with turmeric for its signature golden color. 
        It’s then topped with shredded chicken, herbs, and pickled vegetables. Served with a side of light soup and chili sauce, cơm gà is a satisfying meal that reflects Hoi An’s love for fresh, balanced flavors.`
    }];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Hoi An Cuisine: A Taste of Tradition</h1>
                <p className="indent-14 text-xl font-monospace">
                    Hoi An, an ancient trading port in central Vietnam, is renowned for its preserved architecture and traditional cuisine. 
                    Influenced by centuries of cultural exchange, Hoi An’s food scene is a blend of local, Chinese, and Japanese flavors, 
                    making it a must-visit destination for food lovers seeking authentic and historical dishes.
                </p>

                <div className="flex flex-col items-center">
                    <img src={hoianfoodstall3} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Hoi An</p>
                </div>

                <h1 className="font-bold text-3xl text-center">A Culinary Journey Through Time</h1>
                <p className="indent-14 text-xl font-monospace">
                    The food of Hoi An reflects its historical significance as a port city, where traders from different countries influenced the local cuisine. 
                    Dishes like cao lầu and mì Quảng highlight the city's fusion of Vietnamese, Chinese, and Japanese ingredients. 
                    Whether you're indulging in the famous cao lầu noodles or savoring White Rose Dumplings, Hoi An offers a culinary experience steeped in tradition.
                </p>

                <div className="flex flex-col items-center">
                    <img src={hoianfoodstall2} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Hoi An</p>
                </div>

                <h1 className="font-bold text-3xl text-center">Street Food Heaven</h1>
                <p className="indent-14 text-xl font-monospace">
                    Hoi An’s street food scene is vibrant and diverse. Vendors sell traditional dishes that have been passed down through generations. 
                    From mì Quảng to bánh bao bánh vạc, each dish tells a story of cultural exchange and local adaptation, making Hoi An a street food paradise.
                </p>

                <div className="flex flex-col items-center">
                    <img src={hoianfoodstall1} className="w-[500px]">
                    </img>
                    <p className="italic">A Food Stall in Hoi An</p>
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

export default HoiAnCuisine;
