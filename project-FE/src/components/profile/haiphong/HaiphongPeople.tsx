import haiphongImgUrl5 from "../../../images/haiphongLevelImages/lehoihoaphuong.jpg";
import haiphongImgUrl6 from "../../../images/haiphongLevelImages/canghaiphong.jpg";
import haiphongImgUrl7 from "../../../images/haiphongLevelImages/hoaphuong.jpg";

const HaiphongPeople = ()=>{
    return(
        <div className="w-full h-full container-lg pt-4 flex flex-col items-center gap-10 pb-4">
            {/**Header */}
            <h1 className="font-bold text-3xl text-center">The People of Hai Phong: Strength, Resilience, and Warmth</h1>
            
            <p className="indent-14 text-xl font-monospace">
                The people of Hai Phong, a major port city in northern Vietnam
                , are renowned for their unique blend of strength, resilience, 
                and warmth. Shaped by centuries of history, including the 
                city’s role in trade, industry, and warfare, the residents of 
                Hai Phong embody a proud spirit of perseverance. While they are 
                often described as strong and determined, they also possess a 
                deep sense of community and kindness that is evident in their 
                daily lives. Their character reflects the city’s rich history 
                and its important place in Vietnam’s cultural and economic 
                landscape.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl5} className="w-[1000px]">
                </img>
                <p className="italic">Flamboyant Festival</p>
            </div>

            <h1 className="font-bold text-3xl text-center">A Spirit Forged by Hardship</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Hai Phong’s strategic location as a major port has meant that 
                its people have faced numerous challenges throughout history. 
                From French colonial rule to the Vietnam War, the city has seen 
                its share of struggles, and through it all, the people have 
                displayed remarkable resilience. This resilience is a hallmark 
                of the Hai Phong identity—residents are known for their 
                toughness and determination to overcome hardships. Whether in 
                the fishing villages along the coast or in the city’s 
                industrial heart, the people of Hai Phong have long embraced 
                hard work as a way to build a better future for themselves and 
                their families.
            </p>

            

            <h1 className="font-bold text-3xl text-center">Industrious and Resourceful</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Hai Phong’s status as a port city has shaped its economy and 
                the work ethic of its people. The city has long been a hub for 
                shipping, fishing, and industry, and its residents have a 
                well-earned reputation for being industrious and resourceful. 
                The maritime tradition, in particular, has deeply influenced 
                the character of the city’s workforce. Fishermen, dockworkers, 
                and factory laborers contribute to a thriving local economy, 
                and this sense of productivity extends to the daily lives of 
                its pceople. The residents of Hai Phong take pride in their 
                ability to make the most of their resources, whether they’re 
                harvesting from the sea or working in the city’s factories.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl6} className="w-[700px]">
                </img>
                <p className="italic">Hai Phong's Dock</p>
            </div>

            <h1 className="font-bold text-3xl text-center">Straightforward but Kind-Hearted</h1>
            
            <p className="indent-14 text-xl font-monospace">
                Visitors to Hai Phong often note that its people are known for 
                their straightforwardness. They are practical, direct, and 
                unafraid to speak their minds, which reflects their no-nonsense 
                attitude toward life and work. This honesty, however, is 
                tempered by a strong sense of kindness and hospitality. While 
                Hai Phong’s residents may seem tough on the outside, they are 
                deeply caring toward their families, friends, and community 
                members. In times of need, neighbors come together to support 
                one another, demonstrating a tight-knit sense of solidarity 
                that defines much of the local culture.
            </p>

            <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl7} className="w-[700px]">
                </img>
                <p className="italic">Flamboyant Flower</p>
            </div>
            {/* <div className="flex flex-col items-center">    
                <img src={haiphongImgUrl1} className="w-[1000px]">
                </img>
                <p className="italic">Aerial View of Hai Phong City</p>
            </div> */}

        </div>
    )
}

export default HaiphongPeople;