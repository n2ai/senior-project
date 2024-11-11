import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import eelSoup from "/images/ngheanLevelImages/eelSoup.jpg";
import banhKhoai from "/images/ngheanLevelImages/banhKhoai.jpg";
import banhDuc from "/images/ngheanLevelImages/banhDuc.jpg";
import nhotXanh from "/images/ngheanLevelImages/nhotXanh.jpg";
import keoCuDo from "/images/ngheanLevelImages/keoCuDo.jpg";


const NgheAnCuisine = () => {

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl: eelSoup,
        title: "Cháo Lươn",  
        subtitle: "Chao Luon: Eel Soup of Nghe An",
        description: `Nghe An's famous eel soup is a savory and spicy dish with tender eel pieces simmered in a thick, flavorful broth. 
        It’s seasoned with herbs and chili for a distinctive taste and is often served with steamed sticky rice or bánh mì.`
    }, {
        imgUrl: banhKhoai,
        title: "Bánh Khoai",
        subtitle: "Banh Khoai: Sweet Potato Cakes",
        description: `Bánh Khoai is a popular snack in Nghe An, made with mashed sweet potatoes that are shaped into small cakes and fried to golden perfection. 
        They have a crispy exterior with a soft, sweet inside, offering a comforting and delicious bite.`
    }, {
        imgUrl: banhDuc,
        title: "Bánh Đúc",
        subtitle: "Banh Duc: Vietnamese Savory Rice Cake",
        description: `Bánh Đúc is a rustic rice cake made from rice flour, topped with ground peanuts, crispy shallots, and a tangy fish sauce-based dip. 
        This savory cake is a classic Nghe An treat enjoyed for its smooth texture and mildly sweet flavor.`
    }, {
        imgUrl: nhotXanh,
        title: "Nhót Xanh",
        subtitle: "Nhot Xanh: Green Berries",
        description: `Nhót Xanh, or green berries, are a unique delicacy in Nghe An, often eaten with salt and chili powder. 
        These small, tart berries have a crunchy texture and are enjoyed as a refreshing snack, particularly during summer.`
    }, {
        imgUrl: keoCuDo,
        title: "Kẹo Cu Đơ",
        subtitle: "Keo Cu Do: Peanut and Molasses Candy",
        description: `Keo Cu Do is a traditional peanut candy from Nghe An, made by combining peanuts and sticky molasses for a chewy texture. 
        This candy has a satisfying crunch and is often enjoyed with tea, especially during social gatherings.`
    }];

    return (
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Nghe An Cuisine: A Taste of Central Vietnam</h1>
                <p className="indent-14 text-xl font-monospace">
                    Nghe An, located in central Vietnam, is known for its distinctive, rustic flavors. 
                    With an emphasis on fresh ingredients and traditional preparation methods, Nghe An’s cuisine reflects the simplicity and charm of its people and landscape.
                </p>

                <h1 className="font-bold text-3xl text-center">Flavors of the Central Region</h1>
                <p className="indent-14 text-xl font-monospace">
                    The flavors of Nghe An draw from central Vietnam’s culinary traditions, featuring fresh seafood, local herbs, and a variety of sweet and savory snacks. 
                    Ingredients like eel, sweet potatoes, and rice play a central role in creating the unique flavors of the region.
                </p>

                <h1 className="font-bold text-3xl text-center">Street Foods and Snacks</h1>
                <p className="indent-14 text-xl font-monospace">
                    Nghe An’s street food is a mix of hearty dishes and light snacks, with each bite capturing the essence of the region. 
                    From eel soup to peanut candy, these foods provide a memorable experience for anyone looking to explore central Vietnamese cuisine.
                </p>

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

export default NgheAnCuisine;
