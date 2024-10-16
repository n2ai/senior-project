import ProfileCuisineSwiper from "../ProfileCuisineSwiper";
import { useState } from "react";
import { swiperContent } from "../ProfileCuisineSwiper";
import miQuang from "../../../images/danangLevelImages/miquang.jpg";
import banhTrangThitHeo from "../../../images/danangLevelImages/banhtrangthitheo.jpg";
import banhXeo from "../../../images/danangLevelImages/banhxeodanang.jpg";
import chaCa from "../../../images/danangLevelImages/chacadanang.jpg";
import banhDap from "../../../images/danangLevelImages/banhdap.jpg";
import bunMamNem from "../../../images/danangLevelImages/bunmamnem.jpg";

const DanangCuisine = ()=>{

    const [currentCard, setCurrentCard] = useState<number>(0);
    
    const swiperContents:swiperContent[] = [{
            imgUrl: miQuang,
            title: "Mì Quảng",
            subtitle: "Mi Quang: Da Nang's Signature Noodle Dish",
            description: `Mi Quang is the quintessential dish of Da Nang, a noodle dish that is both vibrant and versatile. 
            Made with wide rice noodles and topped with a variety of proteins such as shrimp, pork, chicken, or even frog, 
            the dish is served with a small amount of intensely flavored broth. The broth, simmered with turmeric, 
            is rich and fragrant, while the toppings are often garnished with peanuts, fresh herbs, and crispy rice crackers 
            for a delightful crunch. The combination of savory and slightly sweet flavors, along with the textural contrast, 
            makes Mi Quang a unique and flavorful experience that truly represents Da Nang's culinary identity.`
        },{
            imgUrl: banhTrangThitHeo,
            title: "Bánh Tráng Thịt Heo",
            subtitle: "Banh Trang Thit Heo: A Fresh and Simple Classic",
            description: `Banh trang thit heo is a popular dish in Da Nang, known for its simplicity and fresh ingredients. 
            It consists of thin slices of boiled pork belly, served with a large rice paper (banh trang) and an array of fresh 
            herbs and vegetables like lettuce, perilla, and cucumber. The dish is accompanied by a dipping sauce made from fermented fish sauce, 
            chili, and garlic, adding a rich, salty kick to the otherwise light meal. Diners roll the pork and herbs into the rice paper, 
            dip into the sauce, and savor the harmony of fresh, savory, and umami flavors. It's a delightful and refreshing dish 
            that exemplifies the balance of flavors and textures in Da Nang cuisine.`
        },{
            imgUrl: banhXeo,
            title: "Bánh Xèo Đà Nẵng",
            subtitle: "Banh Xeo: Da Nang’s Crispy Pancake",
            description: `Banh xeo is a crispy Vietnamese pancake filled with shrimp, pork, and bean sprouts, and it is a beloved 
            street food in Da Nang. The pancake is made from a rice flour batter mixed with turmeric, which gives it a golden color, 
            and it is fried until crispy. It is then wrapped in fresh lettuce and herbs and dipped into a savory and tangy dipping sauce. 
            The combination of the crispy pancake, fresh greens, and dipping sauce creates a delightful mix of flavors and textures that 
            are both satisfying and light. The Da Nang version of banh xeo is thinner and crispier than in other regions, adding 
            a special touch to this classic dish.`
        },{
            imgUrl: chaCa,
            title: "Chả Cá Đà Nẵng",
            subtitle: "Cha Ca: Da Nang’s Grilled Fish Cake",
            description: `Cha ca is a well-known dish in Da Nang, made from finely minced fish that is seasoned with garlic, 
            chili, and spices, then grilled or fried to perfection. The fish cakes are served with rice noodles, fresh herbs, 
            and a dipping sauce made of fermented shrimp paste or fish sauce. The texture of cha ca is firm yet tender, and 
            the smoky grilled flavor adds depth to the dish. Often accompanied by crunchy peanuts and crisp vegetables, 
            cha ca is a delicious and balanced dish that reflects Da Nang’s love for fresh, seafood-based cuisine.`
        },{
            imgUrl: banhDap,
            title: "Bánh Đập",
            subtitle: "Banh Dap: A Rustic Delight",
            description: `Banh dap is a simple yet unique dish made from a combination of crispy rice crackers and soft steamed rice paper. 
            Originating from Da Nang, it is often served with a side of fermented fish sauce and a mixture of minced pork and shrimp. 
            Diners break the crispy rice cracker and fold it over the soft rice paper, then dip it into the savory sauce. The contrast 
            between the crispy and chewy textures, along with the rich, salty flavor of the dipping sauce, makes banh dap a truly satisfying 
            and rustic snack that is deeply rooted in the culinary traditions of Da Nang.`
        },{
            imgUrl: bunMamNem,
            title: "Bún Mắm Nêm",
            subtitle: "Bun Mam Nem: A Fermented Flavor Explosion",
            description: `Bun mam nem is a dish that packs a flavorful punch with its bold use of fermented fish sauce (mam nem). 
            A Da Nang specialty, this dish consists of rice noodles (bun) topped with grilled pork, boiled pork belly, or even roasted pork, 
            and often served with slices of pineapple, fresh herbs, and pickled vegetables. The highlight of this dish is the mam nem, 
            a thick, pungent, and intensely savory fermented fish sauce that is balanced with garlic, chili, and lime. This combination of 
            ingredients results in a delightful interplay of strong, earthy flavors and fresh, tangy notes, making bun mam nem a must-try for 
            those who crave a culinary adventure in Da Nang.`
        }
    ]


    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">

            <div className="w-full gap-10 flex flex-col items-center">
                <h1 className="font-bold text-3xl text-center">Culinary Heritage</h1>
                <p className="indent-14 text-xl font-monospace"> 
                    Food is an essential part of Danang’s culture, with the 
                    city being renowned for its distinctive Central Vietnamese 
                    cuisine. Dishes like mi Quang (Quang-style noodles) and banh 
                    xeo (Vietnamese sizzling pancakes) are deeply connected to 
                    the region’s agricultural practices and coastal resources. 
                    The culinary tradition in Danang is marked by a focus on 
                    fresh ingredients, bold flavors, and a balance of herbs and 
                    spices.
                </p>

                <p className="indent-14 text-xl font-monospace">
                    Seafood, a staple in the local diet, plays a prominent 
                    role in Danang’s gastronomy due to its coastal location. 
                    The vibrant seafood markets and street food stalls offer a 
                    wide variety of dishes that highlight the freshness of the 
                    day’s catch. From grilled clams to steamed fish, the cuisine 
                    not only reflects the abundance of the sea but also the 
                    importance of communal dining and shared meals in Vietnamese 
                    culture.
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

export default DanangCuisine;