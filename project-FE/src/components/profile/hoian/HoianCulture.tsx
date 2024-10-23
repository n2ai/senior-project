import cultureImg1 from "../../../images/hoianLevelImages/hoianculture1.jpg";
import cultureImg2 from "../../../images/hoianLevelImages/hoianculture2.jpg";
import cultureImg3 from "../../../images/hoianLevelImages/hoianculture3.jpg";
import cultureImg4 from "../../../images/hoianLevelImages/hoianculture4.jpg";

const HoianCulture = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">Hoi An Culture: A Fusion of Heritage and Tradition</h1>
            <p className="indent-14 text-xl font-monospace">
                Hoi An, a small yet historically rich city in Vietnam’s Quang Nam 
                province, has become one of the country’s most treasured cultural 
                landmarks. Known for its well-preserved architecture, vibrant festivals, 
                and unique traditions, Hoi An reflects a fusion of local Vietnamese 
                culture with international influences that stretch back centuries. Its 
                historical significance, combined with its modern preservation efforts, 
                makes Hoi An a city where past and present coexist harmoniously, offering 
                a living museum of culture and tradition.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg1} className="w-[1000px]">
                </img>
                <p className="italic">A Small Dock in Hoi An</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Historical Significance</h1>
            <p className="indent-14 text-xl font-monospace">
                Hoi An’s cultural richness can be traced back to its days as a bustling 
                international trading port in the 16th and 17th centuries. At that time, 
                traders from countries such as China, Japan, and various European nations 
                came to Hoi An to trade silk, spices, ceramics, and other valuable goods. 
                This influx of foreign traders introduced new cultural elements to the city
                , influencing its architecture, food, and customs.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg2} className="w-[1000px]">
                </img>
                <p className="italic">A Night in Hoi An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The Old Town of Hoi An is a UNESCO World Heritage Site and showcases a 
                blend of indigenous and foreign architectural styles, with well-preserved 
                merchant houses, temples, and assembly halls. One of the most iconic 
                symbols of this fusion is the Japanese Covered Bridge, a 400-year-old 
                structure that reflects the Japanese influence on the city. Meanwhile, 
                Chinese traders established assembly halls, such as the Fujian Assembly 
                Hall, which became important community and religious centers. These 
                structures, alongside traditional Vietnamese wooden houses, give Hoi An 
                its unique charm.
            </p>

            <h1 className="font-bold text-3xl text-center">Architecture and Preservation</h1>
            <p className="indent-14 text-xl font-monospace">
                Hoi An’s architecture is an embodiment of the cultural synthesis that 
                defines the city. Its narrow streets are lined with buildings painted 
                in hues of yellow, adorned with wooden shutters, red lanterns, and tiled 
                roofs. These homes and shops often feature a distinctive combination of 
                Chinese, Japanese, and French colonial design elements, representing the 
                different cultures that left their mark on Hoi An.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg3} className="w-[1000px]">
                </img>
                <p className="italic">Street in Hoi An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The local government and international organizations have worked 
                diligently to preserve Hoi An’s architectural heritage. Strict 
                regulations ensure that new buildings and renovations maintain the 
                traditional aesthetics that make the city so visually unique. This 
                commitment to preservation is one of the reasons Hoi An is considered a 
                living museum, where people can experience both the grandeur of its past 
                and the vibrancy of its present.
            </p>

            <h1 className="font-bold text-3xl text-center">Traditional Crafts and Arts</h1>
            <p className="indent-14 text-xl font-monospace">
                Hoi An is also known for its traditional crafts, many of which have been 
                passed down through generations. The town’s artisans produce beautiful 
                silk products, pottery, lanterns, and other handicrafts, many of which 
                reflect both local and foreign techniques. The tradition of making 
                lanterns in Hoi An is especially significant. Lanterns, which light up 
                the streets during the monthly Full Moon Festival, are not just 
                decorative but symbolize good fortune and happiness in Vietnamese 
                culture.
            </p>

            <div className="flex flex-col items-center">
                <img src={cultureImg4} className="w-[1000px]">
                </img>
                <p className="italic">Paper Lanterns in Hoi An</p>
            </div>

            <p className="indent-14 text-xl font-monospace">
                The city also fosters a rich tradition of performance arts, including 
                traditional folk music and dance. During the Full Moon Festival, visitors 
                can witness performances of bài chòi, a traditional form of Vietnamese 
                singing and storytelling. These performances, combined with other 
                cultural festivals, keep Hoi An’s artistic traditions alive and 
                integrated into the community’s everyday life.
            </p>
            {/* <div className="flex flex-col items-center">
                <img src={hcmImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Ariel View of Ho Chi Minh City at Night</p>
            </div> */}

            
        </div>
    )
}

export default HoianCulture;