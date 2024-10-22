import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useEffect, useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import saigonPho from "../../../images/hochiminhLevelImages/phosaigon.jpg";
import saigonHuTieu from "../../../images/hochiminhLevelImages/hutieusaigon.jpg";
import saigonBanhMi from "../../../images/hochiminhLevelImages/banhmisaigon.jpg";
import saigonComTam from "../../../images/hochiminhLevelImages/comtamsaigon.jpg";
import saigonGoiCuon from "../../../images/hochiminhLevelImages/goicuonsaigon.jpg";
import saigonBanhXeo from "../../../images/hochiminhLevelImages/banhxeosaigon.jpg";
import saigonCaPheSuaDa from "../../../images/hochiminhLevelImages/caphesuada.jpg";
import saigonfoodstall1 from "../../../images/hochiminhLevelImages/saigonfoodstall1.jpg";
import saigonfoodstall2 from "../../../images/hochiminhLevelImages/saigonfoodstall2.jpg";
import saigonfoodstall3 from "../../../images/hochiminhLevelImages/saigonfoodstall3.jpg";

const HochiminhCuisine = ()=>{

    const [currentCard, setCurrentCard] = useState<number>(0);

    const swiperContents: swiperContent[] = [{
        imgUrl:saigonPho,
        title:"Phở Sài Gòn",
        subtitle:"Pho Saigon: Southern Twist on a National Dish",
        description:`While pho is famous across Vietnam, Saigon's version has its own unique characteristics. 
        Pho in Ho Chi Minh City tends to have a slightly sweeter broth compared to its northern counterpart, reflecting 
        the southern preference for sweeter flavors. The dish is often served with a variety of fresh herbs, bean sprouts, 
        and chili, allowing diners to personalize their bowls. With tender rice noodles, thinly sliced beef or chicken, 
        and a rich, aromatic broth, Saigon's pho is a beloved comfort food that showcases the city's flavor profile— 
        sweet, fragrant, and customizable.`
    },{
        imgUrl:saigonHuTieu,
        title:"Hủ Tiếu",
        subtitle:"Hu Tieu: Saigon’s Savory Street Staple",
        description:`Hủ tiếu is a signature dish of Saigon, particularly known as a street food staple. 
        This noodle soup, with roots in Chinese and Cambodian cuisine, comes in various styles, either with broth 
        or dry (without soup). The broth, typically clearer and lighter than pho, is flavored with pork bones and dried shrimp. 
        The noodles can be made from rice or tapioca, giving a different texture. Toppings include slices of pork, shrimp, 
        quail eggs, and herbs. Hủ tiếu represents Saigon's adaptability and embrace of cross-cultural flavors, making it 
        a beloved dish for locals and visitors alike.`
    },{
        imgUrl:saigonBanhMi,
        title:"Bánh Mì Sài Gòn",
        subtitle:"Banh Mi: The Ultimate Vietnamese Sandwich",
        description:`Saigon is the undisputed home of the world-renowned bánh mì. This crispy French baguette sandwich 
        is filled with a variety of ingredients, from savory cold cuts to pâté, pickled vegetables, fresh cilantro, and chili. 
        The key to a perfect bánh mì is the balance between the crunchy bread, the tangy and spicy pickles, and the rich, flavorful 
        fillings. Whether it’s a quick snack from a street vendor or a gourmet version in a café, bánh mì represents the city's 
        fusion of French colonial influence with Vietnamese street food culture.`
    },{
        imgUrl:saigonComTam,
        title:"Cơm Tấm",
        subtitle:"Com Tam: The Humble Broken Rice Dish",
        description:`Cơm tấm, or broken rice, is a classic Saigon dish that exemplifies the city's resourcefulness. 
        Made from fractured rice grains, this dish was once considered a meal for the lower class but has since become 
        a beloved staple. Served with grilled pork chops, fried eggs, and a side of pickled vegetables, cơm tấm is 
        accompanied by a signature fish sauce dressing. The combination of smoky, tender pork and slightly chewy broken rice, 
        alongside the tangy fish sauce, creates a savory, satisfying meal that reflects the heart of Saigonese cuisine.`
    },{
        imgUrl:saigonGoiCuon,
        title:"Gỏi Cuốn",
        subtitle:"Goi Cuon: Fresh Spring Rolls with Southern Flair",
        description:`Gỏi cuốn, also known as fresh spring rolls, is a light and healthy dish that showcases the freshness of 
        southern Vietnamese ingredients. Thin rice paper is wrapped around shrimp, pork, vermicelli noodles, and fresh herbs, 
        creating a delicate roll that is both refreshing and satisfying. The rolls are typically served with a side of hoisin 
        and peanut dipping sauce, giving it a sweet and nutty flavor that complements the freshness of the ingredients. 
        Gỏi cuốn captures the balance of lightness and flavor that is characteristic of Saigonese cuisine.`
    },{
        imgUrl:saigonBanhXeo,
        title:"Bánh Xèo",
        subtitle:"Banh Xeo: Crispy Crepes with a Southern Twist",
        description:`Bánh xèo, a crispy Vietnamese pancake made from rice flour and turmeric, is a popular street food in Saigon. 
        The crepe is filled with shrimp, pork, and bean sprouts, then folded and served with fresh lettuce, herbs, and dipping sauce. 
        Bánh xèo in Saigon is typically larger and crispier than in other regions, reflecting the city’s penchant for bold, 
        flavorful dishes. The combination of crunchy crepes, savory fillings, and fresh greens dipped in sweet fish sauce 
        offers a delightful mix of textures and flavors, making bánh xèo a favorite among Saigonese locals and tourists alike.`
    },{
        imgUrl:saigonCaPheSuaDa,
        title:"Cà Phê Sữa Đá",
        subtitle:"Ca Phe Sua Da: Vietnam’s Iconic Iced Coffee",
        description:`No visit to Saigon is complete without experiencing cà phê sữa đá, or Vietnamese iced coffee. 
        This strong coffee, brewed using a traditional Vietnamese filter (phin), is mixed with sweetened condensed milk 
        and poured over ice. The result is a refreshing, sweet, and bold coffee that’s perfect for Saigon’s hot climate. 
        Cà phê sữa đá is enjoyed at any time of the day, from morning meetings to late-night chats in street-side cafés, 
        making it an essential part of the city's vibrant coffee culture.`
    }];


    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Saigon Cuisine: A Fusion of Flavors</h1>
                <p className="indent-14 text-xl font-monospace">
                    Saigon, known today as Ho Chi Minh City, is not only a 
                    bustling metropolis but also a culinary haven. The cuisine 
                    of Saigon reflects the city’s rich cultural history, 
                    combining traditional Vietnamese flavors with influences 
                    from Chinese, French, Khmer, and other regional cuisines. 
                    Saigonese food is renowned for its diversity, bold flavors, and fresh ingredients, making it a destination for food lovers from around the world.
                </p>

                <div className="flex flex-col items-center">
                    <img src={saigonfoodstall3} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Ho Chi Minh City</p>
                </div>

                <h1 className="font-bold text-3xl text-center">A Melting Pot of Influences</h1>
                <p className="indent-14 text-xl font-monospace">
                    Saigon’s history as a trading port and a cultural crossroads 
                    has contributed to its eclectic food scene. From the French 
                    colonial era, Saigon inherited a love for bread, pastries, 
                    and coffee. Bánh mì, the Vietnamese sandwich, is a prime 
                    example of this fusion, blending a crispy French baguette 
                    with Vietnamese fillings like pâté, pickled vegetables, and 
                    grilled meats. Similarly, phở, Vietnam's famous noodle soup, 
                    often showcases regional variations in Saigon with a sweeter 
                    broth influenced by southern cooking styles.
                </p>

                <div className="flex flex-col items-center">
                    <img src={saigonfoodstall2} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Ho Chi Minh City</p>
                </div>

                <h1 className="font-bold text-3xl text-center">Street Food Culture</h1>
                <p className="indent-14 text-xl font-monospace">
                    Saigon’s vibrant street food scene is one of its most 
                    beloved aspects. From food carts to open-air markets, 
                    street vendors serve affordable, delicious dishes that are 
                    integral to daily life. Staples like cơm tấm (broken rice 
                    with grilled pork), hủ tiếu (rice noodle soup), and gỏi 
                    cuốn (fresh spring rolls) are popular choices for both 
                    locals and tourists. The accessibility and variety of s
                    treet food make it easy to explore Saigon’s culinary treasures on almost every corner.
                </p>

                <div className="flex flex-col items-center">
                    <img src={saigonfoodstall1} className="w-[1000px]">
                    </img>
                    <p className="italic">A Food Stall in Ho Chi Minh City</p>
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
                
                

                {/**Description go here */}
                <p className="indent-14 text-xl font-monospace">
                    {swiperContents[currentCard].description}
                </p>
            </div>
        </div>
    )
}

export default HochiminhCuisine;